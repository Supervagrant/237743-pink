var menuOpen = document.querySelector (".toggle-nav__btn");
var menuPopup = document.querySelector(".toggle-nav__cross");
var menuClose = document.querySelector(".main-nav__list--closed");
var menuView = document.querySelector(".main-nav__list");




menuOpen.addEventListener("click", function(event) {
  event.preventDefault();
  menuOpen.classList.toggle("toggle-nav__cross");
  menuClose.classList.remove("main-nav__list--closed");
});
menuPopup.addEventListener("click", function(event) {
  event.preventDefault();
  menuPopup.classList.toggle("toggle-nav__btn");
  menuView.classList.remove("main-nav__list");
});

