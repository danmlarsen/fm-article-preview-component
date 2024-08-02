const btn = document.querySelector(".preview__share-btn");
const btnIcon = btn.querySelector(".preview__share-icon");
const shareMenu = document.querySelector(".share-menu");

btn.addEventListener("click", function () {
  shareMenu.classList.toggle("hidden");
  btn.classList.toggle("preview__share-btn--active");
});
