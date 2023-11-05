// DOM Elements
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

// Submit Button Event Listener
signIn.addEventListener("click", () => {
  validateNames();
  validateUserName();
  validatePasswords();
});

// Function to Validate First Name and Last Name, Converting Them to Uppercase
const validateNames = () => {
  // Regular expression to check if all characters in first and last name are uppercase
  const uppercaseRegex = /[A-Z]/g;

  // Check if first and last name are all uppercase letters
  if (
    !uppercaseRegex.test(firstName.value) ||
    !uppercaseRegex.test(lastName.value)
  ) {
    alert("First Name and Last Name Must be in Uppercase");
  }
};

// Function to Validate User Name and Prevent Form Submission if It's Incorrect
const validateUserName = () => {
  // Get the input from the user name field
  const userNameInput = userName.value;

  // Regular expression for validating username
  const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

  // Check if the username is correct
  if (usernameRegex.test(userNameInput)) {
    userNameError.style.display = "none"; // Hide the error message
  } else {
    userNameInput = userName.value;
    userNameError.textContent =
      "Username must include both letters and numbers enter the firstname and lastname again";
  }
};

// Function to Validate Password
const validatePasswords = () => {
  // Regular expression to validate the password pattern
  const validPasswordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

  // Check if the password passes the test
  if (validPasswordRegex.test(password.value)) {
    passwordError.textContent = ""; // Clear the error message
    // Check if password and confirm password match
    if (password.value === confirmPassword.value) {
      // Clear input fields and error messages
      password.value = "";
      confirmPassword.value = "";
      firstName.value = "";
      lastName.value = "";
      userName.value = "";
      confirmPasswordError.textContent = "";
    } else {
      confirmPasswordError.textContent = "Please enter the correct password";
    }
  } else {
    passwordError.textContent =
      "Password must contain at least a symbol, letter, and number";
  }
};

// Function to Toggle Password Visibility
showPassword.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});
