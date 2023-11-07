// DOM Elements
let lastNameInput;
let firstNameInput;
let userNameInput;
let passwordInput;
let emailInput;

const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const signIn = document.querySelector(".submit");
const userName = document.querySelector(".User-name");
const userNameError = document.querySelector(".user-name-error");
const password = document.querySelector(".pass-word");
const showPassword = document.querySelector(".eye-open");
const confirmPassword = document.querySelector(".confirm-pass");
const passwordError = document.querySelector(".password-error");
const confirmPasswordError = document.querySelector(".confirm-pass-error");
const emailAddress = document.querySelector(".email");

// Submit Button Event Listener
signIn.addEventListener("click", () => {
  validateNames();
  validateUserName();
  validatePasswords();
  
});

// Function to Validate First Name and Last Name, Converting Them to Uppercase
const validateNames = () => {
  firstNameInput = firstName.value;
  lastNameInput = lastName.value;

  // Regular expression to check if all characters in first and last name are uppercase
  const uppercaseRegex = /[A-Z]/g;

  // Check if first and last name are all uppercase letters
  if (
    !uppercaseRegex.test(firstNameInput) ||
    !uppercaseRegex.test(lastNameInput)
  ) {
    alert("First Name and Last Name Must be in Uppercase");
  }
};

// Function to Validate User Name and Prevent Form Submission if It's Incorrect
const validateUserName = () => {
  // Get the input from the user name field
  userNameInput = userName.value;

  // Regular expression for validating username
  const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

  // Check if the username is correct
  if (usernameRegex.test(userNameInput)) {
    userNameError.style.display = "none"; // Hide the error message
    userName.value = "";
  } else {
    // userNameInput.value;
    userNameError.textContent =
      "Username must include both letters and numbers";
    alert(`ERROR`)
  }

  emailInput = emailAddress.value;
  if (emailInput) {
    emailAddress.value = "";
  }
};
// Function to Validate Password
const validatePasswords = () => {
  passwordInput = password.value;
  // Regular expression to validate the password pattern
  const validPasswordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  // Check if the password passes the test
  if (validPasswordRegex.test(passwordInput)) {
    passwordError.textContent = ""; // Clear the error message
    // Check if password and confirm password match
    if (passwordInput === confirmPassword.value) {
      // Clear input fields and error messages
      password.value = "";
      confirmPassword.value = "";
      firstName.value = "";
      lastName.value = "";
      passwordInput = "";
      // confirmPasswordError.textContent = "";
    }
  } else {
    passwordError.textContent =
      "Password must contain at least a symbol, letter, and number";
  }
  alert(`Please confirm your details: 
  First Name: ${firstNameInput}
  Last Name : ${lastNameInput}
  User Name: ${userNameInput}
  Email Address: ${emailInput}
  Password : ***********`);
};

// Function to Toggle Password Visibility
showPassword.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});
