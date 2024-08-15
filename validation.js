"use strict";

export function validation() {
  let email = document.getElementById("emailField");
  email.addEventListener("keyup", function () {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailError = document.getElementById("error-userEmail");
    let emailValue = document.getElementById("emailField").value;
    if (emailValue.match(emailPattern)) {
      emailError.innerText = "your email value is valid";
      emailError.style.color = "green";
    } else {
      emailError.innerText = "your email value is Invalid";
      emailError.style.color = "gold";
    }
    if (emailValue.trim() === "") {
      emailError.innerHTML = "";
    }
  });

  let password = document.getElementById("passwordField");
  password.addEventListener("keyup", passwordValidation);

  function passwordValidation() {
    let passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let passwError = document.getElementById("error-UserPassw");
    let passwValue = document.getElementById("passwordField").value;
    if (passwordPattern.test(passwValue)) {
      passwError.innerText = "your password value is valid";
      passwError.style.color = "green";
    } else {
      passwError.innerText = "your password value is Invalid";
      passwError.style.color = "gold";
    }
    if (passwValue.trim() === "") {
      passwError.innerHTML = "";
    }
  }
  let password2 = document.getElementById("MainPassword");
  let password3 = document.getElementById("RepeatPassword");
  password2.addEventListener("keyup", passwordValidation2);
  function passwordValidation2() {
    let passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let passwError = document.getElementById("error-passw");
    let passwValue = document.getElementById("MainPassword").value;
    if (passwordPattern.test(passwValue)) {
      passwError.innerText = "your password value is valid";
      passwError.style.color = "green";
    } else {
      passwError.innerText = "your password value is Invalid";
      passwError.style.color = "gold";
    }
    if (passwValue.trim() === "") {
      passwError.innerHTML = "";
    }
  }
  password3.addEventListener("keyup", passwordValidation3);
  function passwordValidation3() {
    let passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let passwError = document.getElementById("error-passw2");
    let passwValue = document.getElementById("RepeatPassword").value;
    if (passwordPattern.test(passwValue)) {
      passwError.innerText = "your password value is valid";
      passwError.style.color = "green";
    } else {
      passwError.innerText = "your password value is Invalid";
      passwError.style.color = "gold";
    }
    if (passwValue.trim() === "") {
      passwError.innerHTML = "";
    }
  }

  let userName = document.getElementById("UserNameField");
  userName.addEventListener("keyup", function () {
    let userNamePattern = /^[a-zA-Z0-9]{3,20}$/;
    let userNameError = document.getElementById("error-userName");
    let userNameValue = document.getElementById("UserNameField").value;
    if (userNamePattern.test(userNameValue)) {
      userNameError.innerText = "your userName value is valid";
      userNameError.style.color = "green";
    } else {
      userNameError.innerText = "your userName value is Invalid";
      userNameError.style.color = "gold";
    }
    if (userNameValue.trim() === "") {
      userNameError.innerHTML = "";
    }
  });

  let phone = document.getElementById("phoneNumber");
  phone.addEventListener("keyup", function () {
    let phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    let phoneNumberError = document.getElementById("error-phone");
    let phoneNumberValue = document.getElementById("phoneNumber").value;
    if (phoneNumberPattern.test(phoneNumberValue)) {
      phoneNumberError.innerText = "your phone number value is valid";
      phoneNumberError.style.color = "green";
    } else {
      phoneNumberError.innerText = "your phone number value is Invalid";
      phoneNumberError.style.color = "gold";
    }
    if (phoneNumberValue.trim() === "") {
      phoneNumberError.innerHTML = "";
    }
  });



}
