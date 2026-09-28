(() => {
  const header = document.querySelector("header");
  const btn = document.querySelector('header button[aria-label="Open menu"], header button[aria-label="Close menu"]');
  const panel = document.querySelector('header nav[aria-label="Mobile"]')?.parentElement;
  const menuIcon = btn?.querySelector(".lucide-menu");
  const closeIcon = btn?.querySelector(".lucide-x");

  const onScroll = () => {
    if (!header || header.dataset.menuOpen === "true") return;
    const scrolled = window.scrollY > 12;
    header.classList.toggle("bg-paper/92", scrolled);
    header.classList.toggle("backdrop-blur-md", scrolled);
    header.classList.toggle("bg-paper/70", !scrolled);
    header.classList.toggle("backdrop-blur-sm", !scrolled);
    if (scrolled) header.classList.add("shadow-[0_1px_0_0_var(--color-line)]");
    else header.classList.remove("shadow-[0_1px_0_0_var(--color-line)]");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const iconOn = "scale-100 opacity-100 blur-none";
  const iconOff = "scale-[0.25] opacity-0 blur-[4px]";

  function setIcon(el, on) {
    if (!el) return;
    for (const cls of (on ? iconOn : iconOff).split(" ")) el.classList.add(cls);
    for (const cls of (on ? iconOff : iconOn).split(" ")) el.classList.remove(cls);
  }

  function setOpen(open) {
    if (!btn || !panel) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (header) header.dataset.menuOpen = open ? "true" : "false";
    panel.classList.toggle("max-h-0", !open);
    panel.classList.toggle("opacity-0", !open);
    panel.classList.toggle("max-h-[100dvh]", open);
    panel.classList.toggle("opacity-100", open);
    setIcon(menuIcon, !open);
    setIcon(closeIcon, open);
    document.body.style.overflow = open ? "hidden" : "";
    onScroll();
  }

  btn?.addEventListener("click", () => {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  const form = document.querySelector("form");
  if (form && form.querySelector("#message")) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const errors = [];
      if (String(data.name || "").trim().length < 2) errors.push(["name", "A name helps us write back."]);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email || "").trim())) errors.push(["email", "We need a working email."]);
      if (String(data.company || "").trim().length < 2) errors.push(["company", "Which company is this for?"]);
      if (!String(data.engagement || "").trim()) errors.push(["engagement", "Choose a starting point."]);
      if (String(data.message || "").trim().length < 24) errors.push(["message", "A few sentences about the system is enough."]);
      form.querySelectorAll("[data-error]").forEach((n) => n.remove());
      if (errors.length) {
        for (const [id, message] of errors) {
          const field = form.querySelector("#" + id);
          const wrap = field?.closest(".grid") || field?.parentElement;
          if (!wrap) continue;
          const p = document.createElement("p");
          p.dataset.error = "true";
          p.className = "text-sm text-pine";
          p.textContent = message;
          wrap.appendChild(p);
        }
        return;
      }
      const first = String(data.name).trim().split(/\s+/)[0];
      const box = document.createElement("div");
      box.className = "rounded-xl bg-surface px-6 py-10 md:px-10";
      box.innerHTML = '<p class="text-sm tracking-wide text-muted uppercase">Received</p><h2 class="font-display mt-3 text-3xl text-ink">Thank you, ' + first + '.</h2><p class="mt-4 max-w-narrow text-base leading-relaxed text-muted">We have your note about ' + String(data.company) + ". A partner will write to " + String(data.email) + " within a few working days.</p>";
      form.replaceWith(box);
    });
  }
})();
