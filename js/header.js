// затемнение Хедера при скроле вниз, появляется при скроле вверх и скрытие его при скроле вниз

const header = document.getElementById("header");

let lastScrollTop = 0;
if (header) {
  window.addEventListener("scroll", function () {
    let top = document.documentElement.getBoundingClientRect().y;

    if (lastScrollTop > -50) {
      // header.classList.remove("hide_up");
      header.classList.remove("blackout");
    } else if (lastScrollTop < top) {
      header.classList.add("blackout");
      // header.classList.remove("hide_up");
    } else if (lastScrollTop > top) {
      header.classList.add("blackout");
      // header.classList.add("hide_up");
    }

    lastScrollTop = top;
  });
}

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
    if (menuNavBar.classList.contains("open")) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
  });
}
if (servicesBtn) {
  servicesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menuNavBar.classList.add("slide-left");
    servicesSubMenu.classList.toggle("open");
    header.classList.toggle("bg");
    if (servicesSubMenu.classList.contains("open")) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
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

// открытие и закрытие модальных окон (корзины, вход в личный кабинет, ...)

const modalWrapper = document.querySelector("#header .modal-wrapper");

const toggleCartBtn = document.getElementById("toggle_cart_btn");
const cartModalPopup = document.getElementById("cart_popup");
const closeCartPopupBtn = document.querySelector("#cart_popup .close-btn");

const togglePersonalBtn = document.getElementById("toggle_personal_btn");
const personalModalPopup = document.getElementById("personal_popup");
const closePersonalPopupBtn = document.querySelector(
  "#personal_popup .close-btn"
);

const toggleForgotBtn = document.getElementById("toggle_forgot_btn");
const forgotModalPopup = document.getElementById("forgot_popup");
const closeForgotPopupBtn = document.querySelector("#forgot_popup .close-btn");
const comeBackToPersonalBtn = document.querySelector(
  "#forgot_popup .come-back-btn"
);

const toggleCurrencyBtn = document.getElementById("toggle_currency_btn");
const currencyModalPopup = document.getElementById("currency_popup");
const closeCurrencyPopupBtn = document.querySelector(
  "#currency_popup .close-btn"
);

function togglePopup(btn, popup) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (btn === toggleForgotBtn) {
      popup.classList.toggle("open");
      personalModalPopup.classList.remove("open");
    } else if (btn === comeBackToPersonalBtn) {
      popup.classList.toggle("open");
      personalModalPopup.classList.add("open");
    } else {
      modalWrapper.classList.toggle("open");
      popup.classList.toggle("open");
    }
  });
}
if (toggleCartBtn) {
  togglePopup(toggleCartBtn, cartModalPopup);
}
if (closeCartPopupBtn) {
  togglePopup(closeCartPopupBtn, cartModalPopup);
}

if (togglePersonalBtn) {
  togglePopup(togglePersonalBtn, personalModalPopup);
}
if (closePersonalPopupBtn) {
  togglePopup(closePersonalPopupBtn, personalModalPopup);
}

if (toggleForgotBtn) {
  togglePopup(toggleForgotBtn, forgotModalPopup);
}
if (closeForgotPopupBtn) {
  togglePopup(closeForgotPopupBtn, forgotModalPopup);
}
if (comeBackToPersonalBtn) {
  togglePopup(comeBackToPersonalBtn, forgotModalPopup);
}

if (toggleCurrencyBtn) {
  togglePopup(toggleCurrencyBtn, currencyModalPopup);
}
if (closeCurrencyPopupBtn) {
  togglePopup(closeCurrencyPopupBtn, currencyModalPopup);
}

document.addEventListener("click", (e) => {
  if (e.target === modalWrapper) {
    modalWrapper.classList.remove("open");
    cartModalPopup.classList.remove("open");
    personalModalPopup.classList.remove("open");
    forgotModalPopup.classList.remove("open");
    currencyModalPopup.classList.remove("open");
  }
});
