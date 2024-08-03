const btn = document.querySelector(".preview__share-btn");
const shareMenu = document.querySelector(".share-menu");

btn.addEventListener("click", function () {
  btn.classList.toggle("preview__share-btn--active");
  shareMenu.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  const clickedBtn = e.target.closest(".preview__share-btn");
  const clickedMenu = e.target.closest(".share-menu");
  if (
    btn.classList.contains("preview__share-btn--active") &&
    !clickedBtn &&
    !clickedMenu
  ) {
    shareMenu.classList.add("hidden");
    btn.classList.remove("preview__share-btn--active");
  }
});
