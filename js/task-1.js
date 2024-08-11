'use strict';


const itemCategoryAnimals = document.querySelectorAll("#categories .item")
function numberOfElements() {
  console.log(`Number of categories: ${itemCategoryAnimals.length}`)
for (const category of itemCategoryAnimals) {
  const chapter = category.querySelector('h2').textContent;
  const subsections = category.querySelectorAll('li').length;
  console.log(`Category: ${chapter}`)
  console.log(`Elements: ${subsections}`)
  }
}

numberOfElements()