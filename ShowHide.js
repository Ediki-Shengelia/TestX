"use strict";

export function ShowHide() {
  function fnc1() {
    let passw = document.getElementById("passwordField");
    let hideIcon = document.getElementById("eye");
    hideIcon.addEventListener("click", function () {
      if (passw.type == "password") {
        passw.setAttribute("type", "text");
        hideIcon.classList.remove("fa-eye");
        hideIcon.classList.add("fa-eye-slash");
      } else {
        passw.setAttribute("type", "password");
        hideIcon.classList.add("fa-eye");
        hideIcon.classList.remove("fa-eye-slash");
      }
    });

    passw.addEventListener("input", function () {
      if (passw.value === "") {
        document.getElementById("eye").style.display = "none";
      } else {
        document.getElementById("eye").style.display = "block";
      }
    });
  }
  fnc1();

  function fnc2() {
    let passw = document.getElementById("RepeatPassword");
    let hideIcon = document.getElementById("eye3");
    hideIcon.addEventListener("click", function () {
      if (passw.type == "password") {
        passw.setAttribute("type", "text");
        hideIcon.classList.remove("fa-eye");
        hideIcon.classList.add("fa-eye-slash");
      } else {
        passw.setAttribute("type", "password");
        hideIcon.classList.add("fa-eye");
        hideIcon.classList.remove("fa-eye-slash");
      }
    });

    passw.addEventListener("input", function () {
      if (passw.value === "") {
        document.getElementById("eye3").style.display = "none";
      } else {
        document.getElementById("eye3").style.display = "block";
      }
    });
  }
  fnc2();

  function fnc3() {
    let passw = document.getElementById("MainPassword");
    let hideIcon = document.getElementById("eye2");
    hideIcon.addEventListener("click", function () {
      if (passw.type == "password") {
        passw.setAttribute("type", "text");
        hideIcon.classList.remove("fa-eye");
        hideIcon.classList.add("fa-eye-slash");
      } else {
        passw.setAttribute("type", "password");
        hideIcon.classList.add("fa-eye");
        hideIcon.classList.remove("fa-eye-slash");
      }
    });

    passw.addEventListener("input", function () {
      if (passw.value === "") {
        document.getElementById("eye2").style.display = "none";
      } else {
        document.getElementById("eye2").style.display = "block";
      }
    });
  }
  fnc3();
}
