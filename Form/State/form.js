const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

//Show input error messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "input_wrap error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success colour
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "input_wrap success";
}

//check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Email is not invalid");
  }
}

//checkRequired fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
}

//check input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be les than ${max} characters`
    );
  } else {
    showSucces(input);
  }
}

//get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([fname, lname, email, phone]);
  checkLength(fname, 3, 15);
  checkLength(lname, 3, 15);
  checkEmail(email);
  checkLength(phone, 10, 16);
});
