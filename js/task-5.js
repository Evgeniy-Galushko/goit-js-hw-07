'use strict'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log()


const button = document.querySelector(".change-color")
const events = (event) => {
  const divBackgroundColor = document.querySelector(".widget p .color");
  const body = document.querySelector("body")
  const color = getRandomHexColor()
  divBackgroundColor.style.color = color;
  body.style.backgroundColor = color;
}
button.addEventListener("click", events)