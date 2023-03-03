function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += "responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const closeElements = document.querySelectorAll(".close")
const form = document.querySelector(".modal-form")
const formData = document.querySelector(".formData")
const radiosDiv = document.querySelector("#radios-div")
const confirmation = document.querySelector("#form-ok")
const send = document.querySelector("#btn-submit")
const formInputs = [
  document.querySelector("#first"),
  document.querySelector("#last"),
  document.querySelector("#email"),
  document.querySelector("#quantity"),
  document.querySelector("#birthdate"),
  document.querySelector("#checkbox1"),
]

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// open modal form
function launchModal() {
  modalbg.style.display = "block"
  modalbg.classList.add("showModal")
}

// close each modals with btn or cross
closeElements.forEach(el => {
  el.addEventListener("click", closeModal)
})

function closeModal(event) {
  event.preventDefault()
  modalbg.classList.remove("showModal")
  modalbg.classList.add("hideModal")
}

// function that checks validity of an input
function validationCheck (input) {
  const formData = input.parentNode
  let isValid = true

  if (input.type === "text" && input.value.trim().length < 2) {
    isValid = false
  } else if (input.type === "email") {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      const val = input.value
      if (!regex.test(val)) {
        isValid = false
      } 
  } else if (input.type === "number" && 
    (input.value === "" || parseInt(input.value) < 0 || parseInt(input.value) > 99)) {
    isValid = false
  } else if (input.type === "date" && input.value === "") {
    isValid = false
  } else if (input.type === "checkbox" && !input.checked) {
    isValid = false
  }

  if (!isValid) {
    formData.classList.add("data-error-visible")
  } else {
    formData.classList.remove("data-error-visible")
  }

  return isValid
}

// VALIDATION FORM
function validate (event){
  event.preventDefault()
  let error = false
  let isValid = true

  // checking each input
  formInputs.forEach(input => {
    if (!validationCheck(input)) {
      isValid = false
    }
  })

  // checking radios buttons
  const isChecked = radiosDiv.querySelector("input:checked")
  if (!isChecked) {
    radiosDiv.classList.add("data-error-visible")
    error = true
  } else {
    radiosDiv.classList.remove("data-error-visible")
  }

  if (error || !isValid) {
    return false
  } else if (!error || isValid) {
    modalbg.addEventListener("animationend", () => {
      confirmation.style.display = "none"
      form.style.display = "block"
    },
    {
      once:true
    }
    )
    confirmation.style.display = "block"
    form.style.display = "none"
    form.reset()
  }
}

send.addEventListener("click", validate)