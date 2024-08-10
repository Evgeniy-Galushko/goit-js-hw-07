'use strict'



const form = document.querySelector(".login-form")
const events = (event) => {
  event.preventDefault();
  const forms = event.target;
  const email = forms.inputs.trim();
  const password = forms.elements.password.value.trim()
  if (email === "" || password === "") {
    return console.log('All form fields must be filled in')
  }
  forms.reset()
    return console.log({ email: `${email}`, password: `${password}`})
}
form.addEventListener("submit", events)