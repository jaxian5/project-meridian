import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { spawn } from "node:child_process";

const ROOT = "/workspace";
const OUT = join(ROOT, "docs");
const STATIC = join(ROOT, ".vercel/output/static");
const ORIGIN = "http://127.0.0.1:8081";

const ROUTES = [
  "/",
  "/work",
  "/work/northline",
  "/work/halcyon",
  "/work/meridian",
  "/work/vesper",
  "/services",
  "/studio",
  "/members",
  "/members/elena-voss",
  "/members/marcus-hale",
  "/members/priya-nair",
  "/members/jonah-peck",
  "/members/amara-solis",
  "/members/theo-brandt",
  "/members/linh-okada",
  "/members/samira-cole",
  "/contact",
  "/legal",
  "/__not-found",
];

function depthOf(route) {
  if (route === "/" || route === "/__not-found") return 0;
  return route.replace(/^\//, "").split("/").filter(Boolean).length;
}

function rewriteUrl(url, depth) {
  if (!url || url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:") || url.startsWith("#") || url.startsWith("data:")) {
    return url;
  }
  if (url.startsWith("//")) return url;
  if (!url.startsWith("/")) return url;

  const prefix = depth === 0 ? "./" : "../".repeat(depth);
  const [pathPart, hash = ""] = url.split("#");
  const hashSuffix = url.includes("#") ? `#${hash}` : "";
  let rest = pathPart.slice(1);
  if (!rest) return `${prefix}${hashSuffix}` || "./";

  const hasFile = /\.[a-zA-Z0-9]+$/.test(rest.split("?")[0] ?? rest);
  if (!hasFile) rest = rest.replace(/\/?$/, "/");
  return `${prefix}${rest}${hashSuffix}`;
}

function rewriteHtml(html, depth) {
  let out = html;
  out = out.replace(/<script[^>]*src="https:\/\/grok\.com[^"]*"[^>]*><\/script>/g, "");
  out = out.replace(/<link[^>]+href="\/__grok\/[^"]*"[^>]*>/g, "");
  out = out.replace(/<link[^>]+rel="modulepreload"[^>]*>/g, "");
  out = out.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, (tag) => {
    if (tag.includes("$tsr") || tag.includes("$_TSR") || tag.includes('type="module"')) return "";
    if (tag.includes("grok.com")) return "";
    return tag;
  });
  out = out.replace(/<!--\$-->/g, "");
  out = out.replace(/<!--\/\$-->/g, "");

  out = out.replace(/\b(href|src|content|poster|action)="(\/[^"]*)"/g, (_, attr, url) => {
    if (url.startsWith("/__grok/")) return "";
    return `${attr}="${rewriteUrl(url, depth)}"`;
  });

  out = out.replace(/class="([^"]*\breveal\b[^"]*)"/g, (full, cls) => {
    if (cls.includes("reveal-in")) return full;
    return `class="${cls} reveal-in"`;
  });

  const scriptHref = rewriteUrl("/assets/site.js", depth);
  if (!out.includes("assets/site.js")) {
    out = out.replace("</body>", `<script src="${scriptHref}" defer></script></body>`);
  }
  return out;
}

function fileFor(route) {
  if (route === "/") return join(OUT, "index.html");
  if (route === "/__not-found") return join(OUT, "404.html");
  return join(OUT, route.replace(/^\//, ""), "index.html");
}

async function waitForPreview() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(ORIGIN + "/");
      if (res.ok) return;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("GitHub Pages export: production preview on 8081 did not start");
}

function ensurePreview() {
  return new Promise((resolve, reject) => {
    fetch(ORIGIN + "/")
      .then((res) => {
        if (res.ok) resolve(false);
        else start();
      })
      .catch(start);

    function start() {
      const child = spawn("npm", ["run", "preview:restart"], {
        cwd: ROOT,
        stdio: "inherit",
      });
      child.on("exit", (code) => {
        if (code === 0) resolve(true);
        else reject(new Error("preview:restart failed"));
      });
    }
  });
}

const SITE_JS = `(() => {
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
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(String(data.email || "").trim())) errors.push(["email", "We need a working email."]);
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
      const first = String(data.name).trim().split(/\\s+/)[0];
      const box = document.createElement("div");
      box.className = "rounded-xl bg-surface px-6 py-10 md:px-10";
      box.innerHTML = '<p class="text-sm tracking-wide text-muted uppercase">Received</p><h2 class="font-display mt-3 text-3xl text-ink">Thank you, ' + first + '.</h2><p class="mt-4 max-w-narrow text-base leading-relaxed text-muted">We have your note about ' + String(data.company) + ". A partner will write to " + String(data.email) + " within a few working days.</p>";
      form.replaceWith(box);
    });
  }
})();
`;

async function main() {
  const css = readdirSync(join(STATIC, "assets")).find((f) => f.startsWith("styles-") && f.endsWith(".css"));
  if (!css) throw new Error("No built CSS in .vercel/output/static/assets — run npm run build first.");

  await ensurePreview();
  await waitForPreview();

  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(join(OUT, "assets"), { recursive: true });
  mkdirSync(join(OUT, "images"), { recursive: true });

  cpSync(join(STATIC, "assets", css), join(OUT, "assets", css));
  cpSync(join(STATIC, "images"), join(OUT, "images"), { recursive: true });
  cpSync(join(STATIC, "favicon.svg"), join(OUT, "favicon.svg"));
  if (readdirSync(STATIC).includes("og.jpg")) {
    cpSync(join(STATIC, "og.jpg"), join(OUT, "og.jpg"));
  }
  writeFileSync(join(OUT, "assets", "site.js"), SITE_JS);
  writeFileSync(join(OUT, ".nojekyll"), "");

  for (const route of ROUTES) {
    const url = route === "/__not-found" ? ORIGIN + "/this-page-does-not-exist" : ORIGIN + route;
    const res = await fetch(url);
    const html = rewriteHtml(await res.text(), depthOf(route));
    const dest = fileFor(route);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, html);
    console.log("wrote", dest.replace(ROOT + "/", ""), res.status);
  }

  console.log("GitHub Pages site is in docs/ (open docs/index.html).");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
