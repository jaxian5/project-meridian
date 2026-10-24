/* Shared member presentation for the GitHub Pages HTML export. */
(() => {
  const members = window.MERIDIAN_MEMBERS || [];
  if (!members.length) return;
  const escape = value => String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const pathname = location.pathname;
  const isDirectory = /\/members\/?(?:index\.html)?$/.test(pathname);
  const isHome = !pathname.includes("/members/");
  const isDynamic = /\/members\/profile\//.test(pathname);
  const prefix = isHome ? "./" : isDirectory ? "../" : "../../";
  const knownSlugs = new Set(["ahron-john-taguba","cristiannel-collarin","raymond-casaljay","jalil-martin","john-carl-dhaniel-bayang","mark-ian-gabriel-lara","eros-rafael-lim","john-carlo-cansino","john-carlo-taguba","ivan-calixtro","derick-austria","mark-vincent-apostol"]);
  const pathFor = member => prefix + (knownSlugs.has(member.slug) ? "members/" + encodeURIComponent(member.slug) + "/" : "members/profile/?member=" + encodeURIComponent(member.slug));
  const picture = (member, size = "card") => {
    const cls = size === "next" ? "overflow-hidden bg-surface aspect-4/5 max-w-32 rounded-md" : "overflow-hidden bg-surface aspect-4/5 rounded-lg";
    return '<div class="' + cls + '">' + (member.image
      ? '<img src="' + prefix + 'images/' + encodeURIComponent(member.image) + '" alt="Portrait of ' + escape(member.name) + '" loading="lazy" decoding="async" class="img-frame h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105">'
      : '<div class="h-full w-full grid place-items-center"><span class="font-display text-4xl text-muted" aria-hidden="true">' + escape(member.name.split(/\s+/).map(w=>w[0]).slice(0,2).join("").toUpperCase()) + '</span><span class="sr-only">Portrait unavailable for ' + escape(member.name) + '</span></div>') + '</div>';
  };
  const card = member => '<li><div class="reveal reveal-in"><a href="' + pathFor(member) + '" class="group block">' + picture(member) +
    '<p class="mt-4 font-display text-2xl text-ink">' + escape(member.name) + '</p><p class="mt-1 text-sm text-muted">' + escape(member.role) +
    '</p><p class="mt-2 text-sm leading-relaxed text-muted">' + escape(member.short) + '</p></a></div></li>';
  const nextCard = member => '<a href="' + pathFor(member) + '" class="group mt-4 grid items-center gap-6 sm:grid-cols-[8rem_minmax(0,1fr)_auto]">' +
    picture(member, "next") + '<div><h2 class="font-display text-3xl text-ink">' + escape(member.name) +
    '</h2><p class="mt-1 text-sm text-muted">' + escape(member.role) + '</p></div>' +
    '<span class="inline-flex items-center gap-1 text-sm font-medium text-ink">Profile ↗</span></a>';
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-member-count]").forEach(el => { el.textContent = members.length; });
    if (isHome || isDirectory) {
      const list = document.querySelector(isHome ? "[data-member-list=home]" : "[data-member-list=directory]");
      if (list) list.innerHTML = members.map(card).join("");
      document.querySelectorAll("[data-member-heading]").forEach(el => { el.textContent = members.length + " people. One thread."; });
    }
    let slug = isDynamic ? new URLSearchParams(location.search).get("member") : pathname.match(/\/members\/([^/]+)\//)?.[1];
    const selectedIndex = members.findIndex(m => m.slug === slug);
    if (selectedIndex < 0) {
      if (isDynamic) { const el=document.querySelector("[data-member-profile]");if(el)el.textContent="Member not found."; }
      return;
    }
    const member=members[selectedIndex], next=members[(selectedIndex+1)%members.length];
    if (isDynamic) {
      document.title = member.name + " — Skibitech LLC";
      const root=document.querySelector("[data-member-profile]");
      if(root) root.innerHTML='<a href="../../members/" class="text-sm text-muted underline">← All members</a><div class="mt-10 grid items-start gap-10 md:grid-cols-12">' +
        '<div class="md:col-span-5">' + picture(member) + '</div><div class="md:col-span-7"><p class="text-sm uppercase text-muted">'+escape(member.role)+'</p><h1 class="font-display mt-3 text-display text-ink">'+escape(member.name)+'</h1>' +
        '<p class="mt-5 text-lede text-muted">'+escape(member.headline||member.short)+'</p><p class="mt-5 text-sm text-muted">'+escape(member.location||"")+' · Joined '+escape(member.joined||"")+'</p>' +
        (member.email?'<a class="text-sm underline" href="mailto:'+escape(member.email)+'">'+escape(member.email)+'</a>':"")+'</div></div>' +
        '<section class="mt-16 max-w-3xl"><h2 class="font-display text-3xl text-ink">The work</h2>'+(member.bio||[]).map(p=>'<p class="mt-5 text-base leading-relaxed text-muted">'+escape(p)+'</p>').join("")+'</section>' +
        '<section class="mt-16 border-t border-line pt-8"><p class="text-sm text-muted">Next member</p>'+nextCard(next)+'</section>';
      return;
    }
    const title=document.querySelector("main h1");
    if(title) {
      title.textContent=member.name;
      const parent=title.parentElement;
      const role=parent?.querySelector("p:first-child"), lede=title.nextElementSibling;
      if(role)role.textContent=member.role;
      if(lede)lede.textContent=member.headline||member.short;
      const header=title.closest(".mt-10");
      const portrait=header?.querySelector(".md\\:col-span-5");
      if(portrait) portrait.innerHTML=picture(member);
      const details=header?.querySelectorAll("dd");
      if(details?.[0])details[0].textContent=member.location||"";
      if(details?.[1])details[1].textContent=member.joined||"";
      const email=details?.[2]?.querySelector("a");
      if(email&&member.email){email.textContent=member.email;email.href="mailto:"+member.email;}
    }
    const biography = document.querySelector("[data-member-bio]");
    if (biography && Array.isArray(member.bio)) {
      biography.innerHTML = member.bio.map(paragraph =>
        '<div class="reveal reveal-in"><p class="text-base leading-relaxed text-muted">' +
        escape(paragraph) + '</p></div>').join("");
    }
    const oldNext=document.querySelector('a.group.mt-4.grid[href*="/members/"]');
    if(oldNext)oldNext.outerHTML=nextCard(next);
  });
})();