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
  password.addEventListener("keyup", function () {
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
  });
}
