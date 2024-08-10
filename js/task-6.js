'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('button[data-create]')
const buttonDestroy = document.querySelector('button[data-destroy]')

/**
 *  Добавляет новый Div (class="box") для того чтоб туда добавить коллекцию Divs. 
 * И потом удалять ее одним нажатием на Destroy. 
 */
const сreationDiv = (event) => {
  const div = document.querySelector("#boxes")
  const divs = document.createElement('div')
  div.prepend(divs)
  divs.classList.add( "box" )
}
buttonCreate.addEventListener("click", сreationDiv)

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
  if (number <= 100) {
  createBoxes(number)
  function createBoxes(amount) {
    const divBoxes = document.querySelector(".box")
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement('div')
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
    divBoxes.style.display = "flex";
    divBoxes.style.flexDirection = "row";
    divBoxes.style.gap = "25px";
  }
  } 
  input.value = " "
}
buttonCreate.addEventListener("click", eventCreate)
  
/**
 * Очищает Div (class="div-boxes) от вновь созданных объектов.
 */
  function destroyBoxes(){
  const divBoxes = document.querySelector("#boxes div")
    divBoxes.remove()
  }
  buttonDestroy.addEventListener("click", destroyBoxes)




