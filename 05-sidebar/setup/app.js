// select elements

// select elements

const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

// add event listener to sidebar-toggle

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

// add class toggle to close-btn

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
