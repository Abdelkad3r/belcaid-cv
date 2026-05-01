/* ============================================================================
   Mohammed Belcaid — Curriculum Vitæ
   Minimal interactivity: footer year + contents scroll-spy. No animations.
   ============================================================================ */

(() => {
  "use strict";

  /* Footer year ---------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Contents scroll-spy -------------------------------------------------- */
  const links = Array.from(document.querySelectorAll(".contents-list a"));
  if (!links.length) return;

  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const update = () => {
    const y = window.scrollY + window.innerHeight * 0.3;
    let activeId = sections[0]?.id;
    for (const sec of sections) {
      if (sec.offsetTop <= y) activeId = sec.id;
    }
    links.forEach((a) =>
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + activeId)
    );
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
  update();
})();
