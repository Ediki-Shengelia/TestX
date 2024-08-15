export function overlay() {
  let overlay = document.getElementById("overlay");
  let closeIcon = document.getElementById("close");
  closeIcon.addEventListener("click", function () {
    overlay.classList.remove("active");
    document.getElementById("UserNameField").value = "";
    document.getElementById("MainPassword").value = "";
    document.getElementById("RepeatPassword").value = "";
    document.getElementById("phoneNumber").value = "";
    //
    document.getElementById("error-userName").innerHTML = "";
    document.getElementById("error-passw").innerHTML = "";
    document.getElementById("error-passw2").innerHTML = "";
    document.getElementById("error-phone").innerHTML = "";
    document.getElementById("error-gender").innerHTML = "";
    document.getElementById("error-agree").innerHTML = "";
    document.getElementById("save").checked = false;
    document.querySelectorAll(".genderinput").forEach((item) => {
      item.checked = false;
    });
  });
  let NewAcc = document.getElementById("register");
  NewAcc.addEventListener("click", function () {
    overlay.classList.add("active");
    document.getElementById("error-userEmail").innerHTML = "";
    document.getElementById("error-UserPassw").innerHTML = "";
  });
}
