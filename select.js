export function select() {
  let selectElement = document.getElementById("phoneCode");
  selectElement.addEventListener("change", function () {
    let selectElementError = document.getElementById("error-plan");
    let selectElementValue = selectElement.value;
    if (selectElementValue === "") {
      selectElementError.innerText = "Please select a valid option";
      selectElementError.style.color = "gold";
      return false;
    } else {
      selectElementError.innerText = "";
      return true;
    }
    
  });
}
