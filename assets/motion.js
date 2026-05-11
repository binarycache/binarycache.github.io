(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const root = document.body;
  if (!root) return;

  const revealTargets = Array.from(
    document.querySelectorAll(
      [
        ".header-container",
        ".about-container",
        ".content-container .layout",
        ".projects-container .layout",
        ".experience-container .layout",
      ].join(",")
    )
  );

  revealTargets.forEach((node, index) => {
    node.classList.add("motion-reveal");
    node.style.transitionDelay = `${Math.min(index * 55, 260)}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  revealTargets.forEach((node) => revealObserver.observe(node));

  let progress = document.getElementById("motion-progress");
  if (!progress) {
    progress = document.createElement("div");
    progress.id = "motion-progress";
    document.body.appendChild(progress);
  }

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
