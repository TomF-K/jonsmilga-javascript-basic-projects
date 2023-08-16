// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// target button and ul

const toggleButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".links");
console.log(navLinks);

// event listener for toggleButton

toggleButton.addEventListener("click", function () {
  if (!navLinks.classList.contains("show-links")) {
    navLinks.classList.add("show-links");
  } else if (navLinks.classList.contains("show-links")) {
    navLinks.classList.remove("show-links");
  }
});
