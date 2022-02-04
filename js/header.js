const mobileBurgerBtn = document.querySelector("#header-mobile-menu-btn");
const menuNavBar = document.querySelector(" #menu-navbar");
const servicesBtn = document.querySelector(
  "#menu-navbar .menu-item.services a"
);
const servicesSubMenu = document.querySelector(
  "#menu-navbar .menu-item.services > .sub-menu"
);

if (mobileBurgerBtn) {
  mobileBurgerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menuNavBar.classList.toggle("open");
  });
}
if (servicesBtn) {
  servicesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    servicesSubMenu.classList.toggle("open");
  });
}
