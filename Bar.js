
  let burgerBar = document.getElementById("burgerBar");
  let navBar = document.getElementById("navBar");
  burgerBar.addEventListener("click", function () {
    navBar.classList.toggle("show");
    this.classList.toggle("burger");
  });

