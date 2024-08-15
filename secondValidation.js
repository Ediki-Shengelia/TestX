import { select } from "./select.js";

export function secondVAlidation() {
  let formEl = document.getElementById("registerForm");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    this.querySelectorAll(".error-text").forEach((item) => {
      item.innerText = " ";
    });
    let userName = document.getElementById("UserNameField").value;
    if (userName.trim() === "") {
      let userNameError = document.getElementById("error-userName");
      userNameError.innerText = "username value can not be empty";
    }

    let password2 = document.getElementById("MainPassword");
    let password3 = document.getElementById("RepeatPassword");
    if (password2.value.trim() === "") {
      let passwError = document.getElementById("error-passw");
      passwError.innerText = "password value can not be empty";
    }
    if (password3.value.trim() === "") {
      let passwError = document.getElementById("error-passw2");
      passwError.innerText = "password value can not be empty";
    }

    if (password2.value != password3.value) {
      let passwError = document.getElementById("error-passw2");
      passwError.innerText = "password values must be same";
    }

    select();

    let phoneNumberValue = document.getElementById("phoneNumber").value;
    if (phoneNumberValue.trim() === "") {
      let phoneNumberError = document.getElementById("error-phone");
      phoneNumberError.innerText = "phone number value can not be empty";
    }

    let gender = false;
    this.querySelectorAll(".genderinput").forEach((item) => {
      if (item.checked) {
        gender = true;
      }
    });
    if (!gender) {
      let genderError = document.getElementById("error-gender");
      genderError.innerText = "select your gender";
    }

    let check = document.getElementById("save").checked;
    if (!check) {
      let checkError = document.getElementById("error-agree");
      checkError.innerText = "you must agree terms and conditions";
    
    }
  });
}
