const form = document.getElementById("form");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");
let error = document.getElementById("error");

function addClass() {
  country.classList.add("error");
  zipCode.classList.add("error");
  email.classList.add("error");
  password.classList.add("error");
  passwordConfirmation.classList.add("error");
}

function removeClass() {
  country.classList.remove("error");
  zipCode.classList.remove("error");
  email.classList.remove("error");
  password.classList.remove("error");
  passwordConfirmation.classList.remove("error");
}

form.addEventListener("submit", (e) => {
  let messages = [];
  if (country.value === "") {
    messages.push("Country is required");
  }

  if (zipCode.value > 5 || zipCode.value < 4) {
    messages.push("Zip Code must have 4 or 5 characters");
  }

  if (email.value == "") {
    messages.push("E-mail is required");
  }

  if (password.value.length < 5 || password.value.length > 20) {
    messages.push("Password has to be between 5 and 20 characters");
  } else if (password.value == "password") {
    messages.push("You can't use that as a password");
  }

  if (passwordConfirmation.value !== password.value) {
    messages.push("The passwords don't match");
  }
  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
    addClass();
    setTimeout(removeClass, 3000);
  }
});
