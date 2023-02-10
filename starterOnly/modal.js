function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closingCross = document.querySelector(".closing-cross");
const form = document.querySelector(".modal-form");
const inputsTextControl = document.querySelectorAll(".text-control");
const inputsCheckboxInput = document.querySelectorAll(".checkbox-input");
const formIsOk = document.querySelector("#form-is-ok");
const send = document.querySelector("#btn-submit");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//closing modal form
closingCross.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

//validation form
// form.addEventListener("submit", validate);

send.addEventListener("click", validate);
function validate(event) {
  let error = false;
  
  for (let i = 0; i < inputsTextControl.length; i++) {
    if (!inputsTextControl[i].checkValidity()) {
      formData[i].classList.add("data-error-visible");
      error = true;   
    } else {
      formData[i].classList.remove("data-error-visible");
    }
  } 

  for (let j = 0; j < inputsCheckboxInput.length; j++) {
    if(!inputsCheckboxInput[j].checked) {
      inputsCheckboxInput[j].parentNode.classList.add("data-error-visible");
      error = true;   
    } else {
      inputsCheckboxInput[j].parentNode.classList.remove("data-error-visible");
    }
  }
  
  if (error) {
    event.preventDefault();
    return false;
  }
  // Si il n'y a pas d'erreur, afficher le message de validation  
  if (!error) {
    formIsOk.style.display = "block";
    event.preventDefault();
  }
}


