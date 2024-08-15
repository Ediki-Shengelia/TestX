export function form() {
  let formEl = document.getElementById("FormEl");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = {};

    let emailValue = document.getElementById("emailField").value;
    if (emailValue.trim() === "") {
      errors.userEmail = "email value can not be empty";
    }
    let passwValue = document.getElementById("passwordField").value;
    if (passwValue.trim() === "") {
      errors.UserPassw = "password value can not be empty";
    }

    this.querySelectorAll(".error-text").forEach((item) => {
      item.innerText = " ";
    });
    for (let index in errors) {
      let errorElement = document.getElementById("error-" + index);
      if (errorElement) {
        errorElement.innerText = errors[index];
      }
    }
    if (Object.keys(errors).length === 0) {
      window.location.href = "cars.html";
    }
  });
}
