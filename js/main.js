/* ============================================================
   GLOBALIZATION FIELD JOURNAL — MAIN JS
   ============================================================
   Small, dependency-free helpers. Nothing here is required for
   the site to work — it's all progressive enhancement.

   1. Highlight current page in nav
   2. Reading progress bar on post pages
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  highlightCurrentNavLink();
  initReadingProgress();
});

/* ---------- 1. Highlight current page in nav ---------- */
function highlightCurrentNavLink() {
  const links = document.querySelectorAll(".site-nav a");
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------- 2. Reading progress bar ----------
   Only runs if a <div id="reading-progress"></div> exists
   on the page (added automatically to post pages below). */
function initReadingProgress() {
  const bar = document.getElementById("reading-progress");
  if (!bar) return;

  const updateBar = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  };

  window.addEventListener("scroll", updateBar, { passive: true });
  updateBar();
}
