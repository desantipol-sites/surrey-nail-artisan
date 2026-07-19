const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const opening = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(opening));
    menuButton.setAttribute("aria-label", opening ? "Close menu" : "Open menu");
    mobileMenu.hidden = !opening;
    document.body.classList.toggle("menu-open", opening);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
