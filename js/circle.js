window.addEventListener("scroll", function () {
  const top = document.documentElement.getBoundingClientRect().top;
  if (document.querySelector("#circle-animation")) {
    if (top < -10) {
      document.querySelector("#circle-animation").style.opacity =
        1 - top * -0.001;
    } else {
      document.querySelector("#circle-animation").style.opacity = 1;
    }
  }
});
