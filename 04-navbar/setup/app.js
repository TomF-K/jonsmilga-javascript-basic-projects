// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// target button and ul

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");
console.log(navLinks);

// event listener for toggleButton
/*
navToggle.addEventListener("click", function () {
  if (!navLinks.classList.contains("show-links")) {
    navLinks.classList.add("show-links");
  } else (navLinks.classList.contains("show-links")) {
    navLinks.classList.remove("show-links");
  }
});
*/

navToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});
