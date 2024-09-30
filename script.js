
// Change to uppercase for names
function chgupercase() {
  var lastName = document.getElementById("lastName");
  var firstName = document.getElementById("firstName");
  lastName.value = lastName.value.toUpperCase();
  firstName.value = firstName.value.toUpperCase();
}

// Highlighting the input fields
function highlightInput(elm) {
  elm.style.background = "yellow";
}

// Reset background on input fields
function highlightOutput(elm) {
  elm.style.background = "white";
}

// Check if the email is correct
function validateEmail() {
  let email = document.getElementById("email").value;
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let result = document.getElementById("result");
  if (!emailRegex.test(email)) {
      result.textContent = email + " is not valid";
      result.style.color = "red";
      return false;
  } else {
      result.textContent = email + " is valid";
      result.style.color = "blue";
      return true;
  }
}

// Check if phone number is valid
function validatePhone() {
  let phone = document.getElementById("CustPhone").value;
  let phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
      alert("Phone number must be 10 digits.");
      return false;
  }
  return true;
}

// Check password to follow the rules
function validatePassword() {
  let password = document.getElementById("password").value;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{16,}$/;
  if (!passwordRegex.test(password)) {
      alert("Password must be at least 16 characters long and include uppercase, lowercase, numbers, and special symbols.");
      return false;
  }
  return true;
}

// Check the entire form before submitting
function validateForm() {
  let lastName = document.forms["frmContact"]["lastName"].value;
  let firstName = document.forms["frmContact"]["firstName"].value;

  if (lastName == "" || firstName == "") {
      alert("Both names are required.");
      return false;
  }

  if (!validateEmail() || !validatePhone() || !validatePassword()) {
      return false;
  }

  return true;
}
