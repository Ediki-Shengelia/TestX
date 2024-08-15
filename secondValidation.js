import { select } from "./select.js";

export function secondVAlidation() {
  let formEl = document.getElementById("registerForm");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = {};

    this.querySelectorAll(".error-text").forEach((item) => {
      item.innerText = " ";
    });
    let userName = document.getElementById("UserNameField").value;
    if (userName.trim() === "") {
      errors.userName = "username value can not be empty";
    }

    let password2 = document.getElementById("MainPassword");
    let password3 = document.getElementById("RepeatPassword");
    if (password2.value.trim() === "") {
      errors.passw = "password value can not be empty";
    }
    if (password3.value.trim() === "") {
      errors.passw2 = "password value can not be empty";
    }

    if (password2.value != password3.value) {
      errors.passw = "password values must be same";
    }

    select();

    let phoneNumberValue = document.getElementById("phoneNumber").value;
    if (phoneNumberValue.trim() === "") {
      errors.phone = "phone number value can not be empty";
    }

    let gender = false;
    this.querySelectorAll(".genderinput").forEach((item) => {
      if (item.checked) {
        gender = true;
      }
    });
    if (!gender) {
      errors.gender = "select your gender";
    }

    let check = document.getElementById("save").checked;
    if (!check) {
      errors.agree = "you must agree terms and conditions";
    }

    for (let index in errors) {
      let errorElement = document.getElementById("error-" + index);
      if (errorElement) {
        errorElement.innerText = errors[index];
      }
    }

    if (Object.keys(errors).length === 0) {
      alert("you can not register at this moment");
    }
  });
}
