var link = document.querySelectorAll(".toggle-nav__btn");

var popup = document.querySelectorAll(".toggle-nav__cross");

var login = popup.querySelectorAll("[name=date-arrival]");





link.addEventListener("click", function(event) {
  event.preventDefault();
  link.classList.toggle("toggle-nav__cross");
});
