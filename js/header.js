// открыие основного и доп.меню Хедера
const mobileBurgerBtn = document.querySelector("#header-mobile-menu-btn");
const menuNavBar = document.querySelector("#menu-navbar");
const servicesBtn = document.querySelector(
  "#menu-navbar .menu-item.services a"
);
const servicesSubMenu = document.querySelector(
  "#menu-navbar .menu-item.services > .sub-menu"
);
const goBackBtn = document.querySelector("#go-to-main-btn");
const directionsBtn = document.querySelector(
  "#menu-navbar .menu-item.directions-btn > a"
);
const programsBtn = document.querySelector(
  "#menu-navbar .menu-item.programs-btn > a"
);
const directionsSubMenu = document.querySelector(
  "#menu-navbar ul.additional-sub-menu.directions"
);
const programsSubMenu = document.querySelector(
  "#menu-navbar ul.additional-sub-menu.programs"
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
    menuNavBar.classList.add("slide-left");
    servicesSubMenu.classList.toggle("open");
  });
}
if (goBackBtn) {
  goBackBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menuNavBar.classList.remove("slide-left");
    servicesSubMenu.classList.toggle("open");
  });
}

if (directionsBtn) {
  directionsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    directionsBtn.classList.toggle("rotate");
    directionsSubMenu.classList.toggle("open");

    if (programsSubMenu.classList.contains("open")) {
      programsSubMenu.classList.toggle("open");
      programsBtn.classList.toggle("rotate");
    }
  });
}

if (programsBtn) {
  programsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    programsBtn.classList.toggle("rotate");
    programsSubMenu.classList.toggle("open");

    if (directionsSubMenu.classList.contains("open")) {
      directionsSubMenu.classList.toggle("open");
      directionsBtn.classList.toggle("rotate");
    }
  });
}
// открытие и закрытие модальных окон (корзины, ...)

const toggleCartBtn = document.getElementById("toggle_cart_btn");
const modalWrapper = document.querySelector("#header .modal-wrapper");
const cartModalPopup = document.getElementById("cart_popup");
const closeCartPopupBtn = document.querySelector("#cart_popup .close-btn");

function togglePopup(btn, popup) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modalWrapper.classList.toggle("open");
    popup.classList.toggle("open");
  });
}
if (toggleCartBtn) {
  togglePopup(toggleCartBtn, cartModalPopup);
}
if (closeCartPopupBtn) {
  togglePopup(closeCartPopupBtn, cartModalPopup);
}

document.addEventListener("click", (e) => {
  if (e.target === modalWrapper) {
    modalWrapper.classList.toggle("open");
    cartModalPopup.classList.toggle("open");
  }
});
