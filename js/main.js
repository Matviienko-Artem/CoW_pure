var btn_openFilters = document.querySelector(".btn_open_filters");
var filtersContent = document.querySelector(".wrapp_popular_filters");
var btn_corner = document.querySelector(".btn_corner");
if (btn_openFilters) {
  btn_openFilters.addEventListener("click", function () {
    filtersContent.classList.toggle("active");
    btn_corner.classList.toggle("active");
  });
}

// acordion

var btn_title = document.querySelectorAll(".filters_title");
var disc = document.querySelectorAll(".filters_acordion");

for (var i = 0; i < btn_title.length; i++) {
  btn_title[i].addEventListener("click", fun_open);

  function fun_open(event) {
    for (var i = 0; i < btn_title.length; i++) {
      // btn_title[i].classList.add('active');
      // disc[i].classList.remove('active');
      if (btn_title[i] == event.currentTarget) {
        disc[i].classList.toggle("active");
        btn_title[i].classList.toggle("active");
      }
    }
  }
}

// tabs
if (document.querySelectorAll(".pageHead_tabs_item")) {
  var tabs_btn = document.querySelectorAll(".pageHead_tabs_item");
  var tabs_content = document.querySelectorAll(".usefull");

  for (var i = 0; i < tabs_btn.length; i++) {
    tabs_btn[i].addEventListener("click", fun_open);

    function fun_open(event) {
      for (var i = 0; i < tabs_btn.length; i++) {
        tabs_btn[i].classList.remove("active");
        tabs_content[i].classList.remove("active");
        if (tabs_btn[i] == event.currentTarget) {
          tabs_content[i].classList.toggle("active");
          tabs_btn[i].classList.toggle("active");
        }
      }
    }
  }
}

const readMoreBtn_catalog = document.querySelector(
  "#catalog_page div.read-more"
);
const readMoreBtn_singleTeacher = document.querySelector(
  "#single-teacher_page .teachers-themes .read-more"
);
const btn_1 = document.querySelector("#acc_btn_1");
const btn_2 = document.querySelector("#acc_btn_2");
const btn_3 = document.querySelector("#acc_btn_3");
const acc_p_1 = document.querySelector("#acc_item_1");
const acc_p_2 = document.querySelector("#acc_item_2");
const acc_p_3 = document.querySelector("#acc_item_3");
const headerDesktopMenuBtn = document.querySelector("#header-desktop-menu-btn");
const headerDesktopMenu = document.querySelector("#header-desktop-menu");
const headerMobileMenuBtn = document.querySelector("#header-mobile-menu-btn");
const headerMobileMenu = document.querySelector("#header-mobile-menu");
const headerLines = document.querySelectorAll(
  "#header-desktop-menu .lines svg path"
);
const arrHeaderLines = Array.from(headerLines);

const SlideDown = (list, arrow) => {
  list.classList.toggle("open");
  arrow.classList.toggle("rotate");
};

const openPlus = (btn, list) => {
  btn.addEventListener("click", () => {
    const plus = document.querySelector(`#${btn.id} span`);
    list.classList.toggle("open");
    if (plus.innerText === "+") {
      plus.innerText = "-";
    } else {
      plus.innerText = "+";
    }
  });
};

if (readMoreBtn_catalog) {
  readMoreBtn_catalog.addEventListener("click", () =>
    SlideDown(
      document.querySelector("#catalog_page p.text"),
      document.querySelector("#catalog_page .read-more p")
    )
  );
}

if (readMoreBtn_singleTeacher) {
  readMoreBtn_singleTeacher.addEventListener("click", () =>
    SlideDown(
      document.querySelector("#single-teacher_page .teachers-themes ul"),
      document.querySelector(
        "#single-teacher_page .teachers-themes .read-more p"
      )
    )
  );
}

if (btn_1) {
  openPlus(btn_1, acc_p_1);
}

if (btn_2) {
  openPlus(btn_2, acc_p_2);
}

if (btn_3) {
  openPlus(btn_3, acc_p_3);
}
