const btnShare = document.querySelector(".svg");
const avatar = document.querySelector(".avatar");
const share = document.querySelector(".share");
const shareHover = document.querySelector(".share-hover");
const inactive = document.querySelector(".inactive");
const active = document.querySelector(".active");
const svg = document.querySelector(".svg");
const arrowDownBalloon = document.querySelector(".fa-play");
btnShare.addEventListener("click", () => {
  share.classList.toggle("active");
  shareHover.classList.toggle("inactive");
  avatar.classList.toggle("inactive");
  svg.classList.toggle("active");
  arrowDownBalloon.classList.toggle("inactive");
});
