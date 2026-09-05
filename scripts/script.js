// Create references for input fields
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

function validateEmail(email) {
  const atPos = email.indexOf("@");
  const dotPos = email.lastIndexOf(".");

  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

function resetValidation(input) {
  input.classList.remove("is-valid");
  input.classList.remove("is-invalid");
}

function setValidation(input, isValid) {
  resetValidation(input);

  if (isValid) {
    input.classList.add("is-valid");
  } else {
    input.classList.add("is-invalid");
  }

  return isValid;
}

firstNameInput.onkeyup = () => {
  resetValidation(firstNameInput);
};

lastNameInput.onkeyup = () => {
  resetValidation(lastNameInput);
};

emailInput.onkeyup = () => {
  resetValidation(emailInput);
};

passwordInput.onkeyup = () => {
  resetValidation(passwordInput);

  resetValidation(passwordConfirmInput);
};

passwordConfirmInput.onkeyup = () => {
  resetValidation(passwordConfirmInput);
};

submitBtn.onclick = () => {
  const isFirstNameOk = setValidation(
    firstNameInput,
    firstNameInput.value.trim().length > 0,
  );

  const isLastNameOk = setValidation(
    lastNameInput,
    lastNameInput.value.trim().length > 0,
  );

  const isEmailOk = setValidation(
    emailInput,
    validateEmail(emailInput.value.trim()),
  );

  const isPasswordOk = setValidation(
    passwordInput,
    passwordInput.value.length >= 6,
  );

  const isPasswordConfirmOk = setValidation(
    passwordConfirmInput,
    passwordConfirmInput.value.length >= 6 &&
      passwordConfirmInput.value === passwordInput.value,
  );

  if (
    isFirstNameOk &&
    isLastNameOk &&
    isEmailOk &&
    isPasswordOk &&
    isPasswordConfirmOk
  ) {
    alert("Registered successfully");
  }
};

resetBtn.onclick = () => {
  const inputs = [
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
    passwordConfirmInput,
  ];

  inputs.forEach((input) => {
    input.value = "";
    resetValidation(input);
  });

  firstNameInput.focus();
};
