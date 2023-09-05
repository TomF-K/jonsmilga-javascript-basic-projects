// target about

const about = document.querySelector(".about");
// get buttons

const btns = document.querySelectorAll(".tab-btn");
console.log(btns);

// get articles

const articles = document.querySelectorAll(".content");

// add click event listener for about section

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide all articles, display matching id
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
