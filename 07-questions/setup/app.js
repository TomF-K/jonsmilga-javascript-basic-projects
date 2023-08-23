//using selectors inside the element

// select question text
// add click event to plus icon
// add show-text class

const questions = document.querySelectorAll(".question");

// you need to loop over all of the question elements

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// traversing the dom

// select all buttons, loop over them

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
// btn.addEventListener("click", function (e) {
// const question = e.currentTarget.parentElement.parentElement;
// question.classList.toggle("show-text");
// });
// });
