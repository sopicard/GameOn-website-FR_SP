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
const send = document.querySelector("#btn-submit");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
// all spans for error sentences
const errorFirst = document.querySelector("#error-first");
const errorLast = document.querySelector("#error-last");
const errorEmail = document.querySelector("#error-email");
const errorBirthdate = document.querySelector("#error-birthdate");
const errorQuantity = document.querySelector("#error-quantity");

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

//btn-submit event
send.addEventListener("click", validationForm);

//function to check validity of inputs and send the form
function validationForm(event) {

  if (!firstName.value || firstName.value.length < 2) {
    event.preventDefault();
    errorFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    errorFirst.style.color = "red";  
    return false;
  } else if (!lastName.value || lastName.value.length < 2) {
      event.preventDefault();
      errorFirst.textContent = "";
      errorLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      errorLast.style.color = "red";
      return false;
  } else if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      //regex to have a valid email adress
      errorLast.textContent = "";
      event.preventDefault();
      errorEmail.textContent = "Veuillez entrer une adresse mail valide";
      errorEmail.style.color = "red";
      return false;
  } else if (!birthDate.value) {
      errorEmail.textContent = "";
      event.preventDefault();
      errorBirthdate.textContent = "Veuillez entrer votre date de naissance";
      errorBirthdate.style.color = "red";
      return false;
  } else if (!quantity.value) {
      errorBirthdate.textContent = "";
      event.preventDefault();
      errorQuantity.textContent = "Veuillez saisir une valeur numérique";
      errorQuantity.style.color = "red";
      return false;
  } else {
      alert("Merci ! Votre réservation a été reçue.");
  }
}