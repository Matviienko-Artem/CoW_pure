window.addEventListener("scroll", function () {
  if (document.querySelector("#circle-animation")) {
    if (document.documentElement.getBoundingClientRect().top < -650) {
      document.querySelector("#circle-animation").style.opacity = 0;
      document.querySelector("#circle-animation").style.display = "none";
    } else if (document.documentElement.getBoundingClientRect().top < -400) {
      document.querySelector("#circle-animation").style.opacity = 0.3;
      document.querySelector("#circle-animation").style.display = "block";
    } else if (document.documentElement.getBoundingClientRect().top < -300) {
      document.querySelector("#circle-animation").style.opacity = 0.5;
      document.querySelector("#circle-animation").style.display = "block";
    } else if (document.documentElement.getBoundingClientRect().top < -200) {
      document.querySelector("#circle-animation").style.opacity = 0.7;
      document.querySelector("#circle-animation").style.display = "block";
    } else if (document.documentElement.getBoundingClientRect().top < -100) {
      document.querySelector("#circle-animation").style.opacity = 0.8;
      document.querySelector("#circle-animation").style.display = "block";
    } else {
      document.querySelector("#circle-animation").style.opacity = 1;
      document.querySelector("#circle-animation").style.display = "block";
    }
  }
});
