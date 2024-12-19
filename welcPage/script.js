let btn = document.querySelector("button");
let modal = document.querySelector(".modal");
let closeIcon = document.querySelector(".modal he span");
btn.addEventListener("click", () => {
  modal.classList.add("showModal");
});

closeIcon.addEventListener("click", () => {
  modal.classList.remove("showModal");
});
