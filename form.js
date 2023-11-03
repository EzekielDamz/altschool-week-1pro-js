//DOM Manipulation
let validatePassword;
let confirmPass;
let passWord;

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const signIn = document.querySelector("#submit");
const userInput = document.querySelector("#User-name");
const userNameDisplay = document.querySelector("#para");
const password = document.querySelector("#pass-word");
const eyeopener = document.querySelector("#eye-open");
const confirmPassword = document.querySelector("#confirm-pass");
const pass = document.querySelector("#pass");
const confPass = document.querySelector("#conf-pass");

/// Submit function evenlisterner..
signIn.addEventListener("click", () => {
  firstUpperCase();
  lastUpperCase();
  validateUserName();
  validatePassword();
});

// VALIDATE FIRSTNAME AND LASTNAME AND SET THEM TO UPPERCASE
function firstUpperCase() {
  let input = firstName.value;
  // validatePassword(input);
  const upper = input.toUpperCase();

  if (input !== upper) {
    input = firstName.value;
    lastInput = lastName.value;
    alert(" First Name and Last Name Must be a upper case letter");
  } else {
    firstName.value = "";
    lastName.value = "";
    console.log(upper);
  }
  input = firstName.value;
}

function lastUpperCase() {
  // get the value
  let lastInput = lastName.value;
  //convert the value to uppcase

  let lastupper = lastInput.toUpperCase();

  //// check if input value is uppercase

  if (lastInput !== lastupper) {
    input = firstName.value;
    lastInput = lastName.value;
  } else {
    // firstInput.value = " ";
    // lastName.value = " ";
    console.log(lastupper);
  }
}

/// VALIDATE USER NAME INPUT PREVENT and THE FORM FROM SUBMISSION IF THE USER NAME IS INCORRECT
const validateUserName = () => {
  //get the input from the input field
  let validUser = userInput.value;
  /// username syntax

  const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  ///// condition to check if username is correct
  if (regex.test(validUser)) {
    userInput.value = "";

  } else {
    
    input = firstName.value;
    lastInput = lastName.value;
    validUser = userInput.value;
    userNameDisplay.textContent = `***username must include number and alphabet`;
  }
};

///// VALIDATE PASSWORD
validatePassword = () => {
  // Get the value of the password input field
let confirmPass = confirmPassword.value;
  let passWord = password.value;

  //// valiate password pattern
  let validPass =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  //confirm if password is correct
  if (validPass.test(passWord)) {
    password.value = "";
  } else if (confirmPass === passWord) {
    
  }
  else {
    lastInput = lastName.value;
    validUser = userInput.value;
    passWord = password.value;

    pass.textContent = `**Must contain at least a symbol, alphabet and number`;
  }

  //// check if password match with confirm password
  // let confirmPass = confirmPassword.value;

  if (confirmPass === passWord) {
    confirmPassword.value = "";
  } else {
    confPass.textContent = `***Please enter the correct password`;
    confirmPass = confirmPassword.value;
     passWord = password.value;
  }
};
///// ADDING EYE-OPERNER TO THE PASSWORD/////

eyeopener.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eyeopener.innerHTML = "&#128065";
  } else {
    password.type = "password";
    eyeopener.innerHTML = "&#128065";
  }
});
