document.addEventListener("DOMContentLoaded", function () {
  var scrollUpBtn = document.getElementById("scroll-up");
  var scrollDownBtn = document.getElementById("scroll-down");

  scrollUpBtn.addEventListener("click", () => scrollTo(0, 0));
  scrollDownBtn.addEventListener("click", () => scrollTo(0, document.body.scrollHeight));

  addEventListener(
    "scroll",
    () => {
      scrollUpBtn.classList.toggle("scrollUp", window.scrollY === 0);
      scrollDownBtn.classList.toggle("scrollUp", window.scrollY > 0);
    },
    false
  );
});
