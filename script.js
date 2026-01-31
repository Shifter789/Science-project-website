let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  lastScrollY = window.scrollY;
}, { passive: true });

document.addEventListener("focusin", (e) => {
  if (e.target.tagName === "IFRAME") {
    setTimeout(() => window.scrollTo(0, lastScrollY), 0);
    setTimeout(() => window.scrollTo(0, lastScrollY), 50);
    setTimeout(() => window.scrollTo(0, lastScrollY), 150);
    setTimeout(() => window.scrollTo(0, lastScrollY), 300);
  }
});
