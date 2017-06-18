var container = document.querySelector(".main-nav__list");
container.classList.remove('no-js');

var button = document.querySelector(".toggle-menu--closed");
var logo = document.querySelector(".main-nav__logo-wrapper--open");

button.addEventListener("click", function() {
    container.classList.toggle("main-nav__list--hided");
    button.classList.toggle("toggle-menu");
    logo.classList.toggle("main-nav__logo-wrapper");
});
