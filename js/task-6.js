'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const buttonCreate = document.querySelector(".button-one")
// console.log(buttonCreate)
const inputs = document.querySelector("input")

const nam = event => {console.log(event.currentTarget.value)}
inputs.addEventListener("keydown", nam)

// console.log(brt)

const divBoxes = document.querySelector("#boxes")
const createBoxes = (amount) => {
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement("div")
    if (i === 1) {
      divBoxes.prepend(div)
      div.style.width = "30px";
      div.style.height = "30px";
    } else {
      divBoxes.append(div)
      div.style.width = `${30 + ((i-1) * 10)}px`;
      div.style.height = `${30 + ((i - 1) * 10)}px`;
    }
  div.style.backgroundColor = getRandomHexColor()
  }
}

createBoxes(5)
divBoxes.style.display = "flex";
divBoxes.style.flexDirection = "row";
divBoxes.style.gap = "25px";



// createBoxes(amount)