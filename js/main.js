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

const arrReadMoreContainers = Array.from(
  document.querySelectorAll("div.read_more_container")
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

const cartClientDetailsFormInputs = document.querySelectorAll(
  ".contact_details input[type='text']"
);

const arrCartClientDetailsFormInputs = Array.from(cartClientDetailsFormInputs);
const popupFormInputs = document.querySelectorAll(".popup input[type='text']");
const arrPopupFormInputsFormInputs = Array.from(popupFormInputs);
const writeUsFormInputs = document.querySelectorAll(".write-us-section input");
const arrWriteUsFormInputsFormInputs = Array.from(writeUsFormInputs);

const pickupRadioBtn = document.querySelector(".radio-container input#pickup");
const courierRadioBtn = document.querySelector(
  ".radio-container input#courier"
);
const newMailRadioBtn = document.querySelector(
  ".radio-container input#new_mail"
);
const pickupContainer = document.querySelector(
  "form#cart_delivery_details .pickup-container"
);
const courierContainer = document.querySelector(
  "form#cart_delivery_details .courier-container"
);
const newMailContainer = document.querySelector(
  "form#cart_delivery_details .new_mail-container"
);

// уезжающий label с input

arrCartClientDetailsFormInputs.map((i) =>
  i.addEventListener("change", () => {
    if (i.value !== "") {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  })
);

arrPopupFormInputsFormInputs.map((i) =>
  i.addEventListener("change", () => {
    if (i.value !== "") {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  })
);
arrWriteUsFormInputsFormInputs.map((i) =>
  i.addEventListener("change", () => {
    if (i.value !== "") {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  })
);

// переключение контента от радиокнопки на странице корзины
if (pickupRadioBtn) {
  pickupRadioBtn.addEventListener("change", () => {
    if (pickupRadioBtn.checked) {
      pickupContainer.style.display = "block";
      courierContainer.style.display = "none";
      newMailContainer.style.display = "none";
    }
  });
}
if (courierRadioBtn) {
  courierRadioBtn.addEventListener("change", () => {
    if (courierRadioBtn.checked) {
      courierContainer.style.display = "block";
      pickupContainer.style.display = "none";
      newMailContainer.style.display = "none";
    }
  });
}
if (newMailRadioBtn) {
  newMailRadioBtn.addEventListener("change", () => {
    if (newMailRadioBtn.checked) {
      newMailContainer.style.display = "block";
      courierContainer.style.display = "none";
      pickupContainer.style.display = "none";
    }
  });
}

// -----------------------
const SlideDown = (list, arrow) => {
  list.classList.toggle("open");
  arrow.classList.toggle("rotate");
};

if (arrReadMoreContainers) {
  arrReadMoreContainers.map((item) => {
    const content = item.children[0];
    const btnArrow = item.children[1].children[0];
    if (content && btnArrow) {
      // console.log(content);
      // console.log(btnArrow);

      item.addEventListener("click", () => SlideDown(content, btnArrow));
    }
  });
}
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

const ourSchoolImage = document.querySelector(
  ".our-school-section .our-school-image img"
);

if (btn_1) {
  openPlus(btn_1, acc_p_1);
  btn_1.addEventListener("click", () => {
    ourSchoolImage.attributes.src.value = "./images/our-school-image.jpg";
  });
}

if (btn_2) {
  openPlus(btn_2, acc_p_2);
  btn_2.addEventListener("click", () => {
    ourSchoolImage.attributes.src.value = "./images/wrap3.png";
  });
}

if (btn_3) {
  openPlus(btn_3, acc_p_3);
  btn_3.addEventListener("click", () => {
    ourSchoolImage.attributes.src.value = "./images/wrap2.png";
  });
}

// изменение контента при выборе селекта в секции учителя
const selectLubanova = document.querySelector(
  ".teachers-consultations.lubanova .select-wrap select"
);
const selectContentLubanova = document.querySelectorAll(
  ".teachers-consultations.lubanova .select-container"
);
const arrselectContentLubanova = Array.from(selectContentLubanova);

const selectMilovidova = document.querySelector(
  ".teachers-consultations.milovidova .select-wrap select"
);
const selectContentMilovidova = document.querySelectorAll(
  ".teachers-consultations.milovidova .select-container"
);
const arrSelectContentMilovidova = Array.from(selectContentMilovidova);

if (selectLubanova) {
  selectLubanova.addEventListener("change", (e) => {
    arrselectContentLubanova.map((i) => {
      if (e.target.value === i.id) {
        i.classList.add("show");
      } else {
        i.classList.remove("show");
      }
    });
  });
}
if (selectMilovidova) {
  selectMilovidova.addEventListener("change", (e) => {
    arrSelectContentMilovidova.map((i) => {
      if (e.target.value === i.id) {
        i.classList.add("show");
      } else {
        i.classList.remove("show");
      }
    });
  });
}

const videoWrap = document.querySelector(".video-container .video-wrap");
videoWrap.addEventListener("click", (e) => {
  e.target.style.display = "none";
});
