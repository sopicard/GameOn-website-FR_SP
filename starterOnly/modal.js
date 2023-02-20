function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const closeElements = document.querySelectorAll(".close")
const form = document.querySelector(".modal-form")
const inputsTextControl = document.querySelectorAll(".text-control")
const radiosDiv = document.querySelector("#radios-div")
const confirmation = document.querySelector("#form-ok")
const send = document.querySelector("#btn-submit")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

//close each modals with btn or cross
// for (let i=0; i < closeElements.length; i++) {
//   closeElements[i].addEventListener("click", closeModal)
// }

closeElements.forEach(el => {
  el.addEventListener("click", closeModal)
})

function closeModal(event) {
  event.preventDefault()
  const modal = event.target.closest(".modal")
  modal.style.display = "none"
  confirmation.style.display = "none"
  form.style.display = "block"
}

//validation form
//form.addEventListener("submit", validate)

send.addEventListener("click", validate)
function validate (event){
  event.preventDefault()
  let error = false

  //checking each form's input
  inputsTextControl.forEach ((input) => {
    const formData = input.parentNode
    if (!input.checkValidity()) {
      formData.classList.add("data-error-visible")  
      error = true 
    } else {
      formData.classList.remove("data-error-visible")
    }
  })

  //checking radios buttons
  const isChecked = radiosDiv.querySelector("input:checked")
  if (!isChecked) {
    radiosDiv.classList.add("data-error-visible")
    error = true
  } else {
    radiosDiv.classList.remove("data-error-visible")
  }

  if (error) {
    return false;
  } else if (!error) {
    confirmation.style.display = "block"
    form.style.display = "none"
    form.reset()
  }
}



