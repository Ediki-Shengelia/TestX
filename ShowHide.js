"use strict";

export function ShowHide() {
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
