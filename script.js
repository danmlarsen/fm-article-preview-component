const btn = document.querySelector(".preview__share-btn");
const shareMenu = document.querySelector(".share-menu");

btn.addEventListener("click", function () {
  btn.classList.toggle("preview__share-btn--active");
  shareMenu.classList.toggle("hidden");
});
