'use strict';


const items = document.querySelectorAll("#categories .item")
function numberOfCategories(array) {
let numbers = []
for (const item of array) {
  numbers.push(item)
}
console.log(`Namber of categories: ${numbers.length}`)
}
numberOfCategories(items)

const itemCategoryAnimals = document.querySelector(".item .title-animals")
console.log(`Category: ${itemCategoryAnimals.textContent}`)
const itemElementsAnimals = document.querySelectorAll(".item .item-ul-animals li")
function numberOfElements(array) {
let numbers = []
for (const item of array) {
  numbers.push(item)
}
console.log(`Elements: ${numbers.length}`)
}
numberOfElements(itemElementsAnimals)

const itemCategoryProducts = document.querySelector(".item .title-products")
console.log(`Category: ${itemCategoryProducts.textContent}`)
const itemElementsProducts = document.querySelectorAll(".item .item-ul-products li")
numberOfElements(itemElementsProducts)


const itemCategoryTechnologies = document.querySelector(".item .title-technologies")
console.log(`Category: ${itemCategoryTechnologies.textContent}`)
const itemElementsTechnologies = document.querySelectorAll(".item .item-ul-technologies li")
numberOfElements(itemElementsTechnologies)


