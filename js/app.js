document.addEventListener("DOMContentLoaded", () => {
  app();
});

const app = () => {
  let result = "";
  const button = document.querySelector(".card__button");
  const paragraphs = document.querySelectorAll("p");
  const cardResult = document.querySelector(".card.result");
  const card = document.querySelector(".card");
  const showResult = document.querySelector(".showResult");

  paragraphs.forEach((item, index) => {
    item.addEventListener("click", () => {
      paragraphs.forEach((paragraph) => {
        paragraph.classList.remove("selected");
      });
      result = item.textContent;
      item.classList.add("selected");
    });
  });

  button.addEventListener("click", () => {
    cardResult.style.display = "flex";
    card.style.display = "none";

    showResult.innerHTML = `You selected ${result} out of 5`;
  });
};
