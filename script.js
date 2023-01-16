let faqTextContainer = document.querySelectorAll(".faq-text-container");
let boxImg = document.querySelector(".box-img");

faqTextContainer.forEach((show) => {
  show.addEventListener("click", () => {
    show.firstElementChild.classList.toggle("svg-arrow-move");
    show.lastElementChild.classList.toggle("faq-p-answer-show");
    boxImg.classList.toggle("box-img-move");
    show.classList.toggle("faq-p-focus");
  });
});