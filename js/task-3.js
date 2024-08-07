'use strict'

const nameLine = document.querySelector("#name-input")
const greetingLine = document.querySelector("#name-output")
const events = (event) => {
  if (event.currentTarget.value !== " " && event.currentTarget.value !== "") {
    greetingLine.textContent = event.currentTarget.value.trim()
  } else {
    greetingLine.textContent = "Anonymous"
  }
}
nameLine.addEventListener("input", events)
