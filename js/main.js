
var menuOpen = document.querySelector (".toggle-nav__btn");
var menuPopup = document.querySelector(".toggle-nav__cross");



menuOpen.addEventListener("click", function(event) {
  event.preventDefault();
  menuOpen.classList.toggle("toggle-nav__cross");
});

menuPopup.addEventListener("click", function(event) {
  event.preventDefault();
  menuPopup.classList.toggle("toggle-nav__cross");
});
