export function overlay() {
  let overlay = document.getElementById("overlay");
  let closeIcon = document.getElementById("close");
  closeIcon.addEventListener("click", function () {
    overlay.classList.remove("active");
  });
  let NewAcc = document.getElementById("register");
  NewAcc.addEventListener("click", function () {
    overlay.classList.add("active");
    document.getElementById("error-userEmail").innerHTML = "";
    document.getElementById("error-UserPassw").innerHTML = "";
  });
}
