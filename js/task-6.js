'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')

/**
 * Проверяет на соответствие количества объектов. 
 * Очищает input
 * Добавляет новые объекты и рандомно подкрашивает.
 */
const eventCreate = (event) => {
  const input = document.querySelector("input")
  const events = (event) => {}
  input.addEventListener("input", events)
  const number = input.value 
  if (number > 0 && number <= 100) {
  createBoxes(number)
  } 
  input.value = ""
}
buttonCreate.addEventListener("click", eventCreate)

const divBoxes = document.querySelector("#boxes")
const divs = document.createDocumentFragment()
function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement('div')
    if (i <= 1) {
      div.style.width = "30px";
      div.style.height = "30px";
    } else {
      div.style.width = `${30 + ((i-1) * 10)}px`;
      div.style.height = `${30 + ((i - 1) * 10)}px`;
    }
    divs.appendChild(div)
    div.style.backgroundColor = getRandomHexColor()
  }
  divBoxes.appendChild(divs)
  
    divBoxes.style.display = "flex";
    divBoxes.style.flexDirection = "row";
    divBoxes.style.gap = "25px";
    console.log()
}
  

/**
 * Очищает Div (class="div-boxes) от вновь созданных объектов.
 */
  function destroyBoxes(){
  const divBoxes = document.querySelector("#boxes")
    divBoxes.innerHTML = ` `
  }
  buttonDestroy.addEventListener("click", destroyBoxes)




