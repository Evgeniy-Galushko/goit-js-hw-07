'use strict'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const button = document.querySelector(".change-color")
const events = (event) => {
  const divBackgroundColor = document.querySelector(".widget .color");
  const body = document.querySelector("body")
  const color = getRandomHexColor()
  divBackgroundColor.style.backgroundColor = color;
  divBackgroundColor.style.color = "#fff";
  body.style.backgroundColor = color;
}
button.addEventListener("click", events)