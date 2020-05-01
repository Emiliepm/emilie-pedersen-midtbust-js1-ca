const form = document.querySelector("#contactForm");

const nameContainer = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const answerContainer = document.querySelector("#answer");
const answerError = document.querySelector("#answerError");

const emailContainer = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const invalidEmailError = document.querySelector("#invalidEmailError");

const addressContainer = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const inputName = nameContainer.value;
  const trimmedName = inputName.trim();
  validateName(trimmedName);

  const inputAnswer = answerContainer.value;
  const trimmedAnswer = inputAnswer.trim();
  validateAnswer(trimmedAnswer);

  const inputEmail = emailContainer.value;
  const trimmedEmail = inputEmail.trim();
  validateEmail(trimmedEmail);

  const inputAddress = addressContainer.value;
  const trimmedAddress = inputAddress.trim();
  validateAddress(trimmedAddress);
}

function validateName(name) {
  if (name.length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
}

function validateAnswer(answer) {
  if (answer.length >= 10) {
    answerError.style.display = "none";
  } else {
    answerError.style.display = "block";
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;

  if (regEx.test(email) === true) {
    emailError.style.display = "none";
    invalidEmailError.style.display = "none";
  } else if (email.length === 0) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    invalidEmailError.style.display = "block";
  }
}

function validateAddress(address) {
  if (address.length >= 15) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}
