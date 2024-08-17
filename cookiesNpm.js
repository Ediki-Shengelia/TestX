export function cookieNpm() {
  document.getElementById("leave").addEventListener("submit", function (e) {
    e.preventDefault();
    let checkbox = document.getElementById("check");
    let phoneValue = document.getElementById("phoneValue").value;
    if (checkbox.checked) {
      Cookies.set("cookies", phoneValue);
    } else {
      Cookies.remove("cookies");
    }
  });

  let savedusernameCookies = Cookies.get("cookies");
  if (savedusernameCookies) {
    document.getElementById("phoneValue").value = savedusernameCookies;
    document.getElementById("check").checked = true;
  }
}
