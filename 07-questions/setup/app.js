//using selectors inside the element

// select question text
// add click event to plus icon
// add show-text class

// const question = document.getElementsByClassName(".question");
// const plusBtn = document.querySelector(".plus-icon");
// const minusBtn = document.querySelector(".minus-icon");

// plusBtn.addEventListener("click", function () {
//  question.classList.add("show-text");
// });

// minusBtn.addEventListener("click", function () {
//  question.classList.remove("show-text");
// });

// traversing the dom

// select all buttons, loop over them

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.parentElement);
  });
});
