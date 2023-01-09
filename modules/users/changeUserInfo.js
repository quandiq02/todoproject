let _lsUsers = JSON.parse(localStorage.getItem("users-list")),
  _currentUser = JSON.parse(localStorage.getItem("current-user")),
  settingsLogin = document.querySelector("#settings__login-input"),
  settingsPassword = document.querySelector("#settings__password-input"),
  settingsConfPass = document.querySelector("#settings__password-confirm"),
  saveBtn = document.querySelector(".settings__button-save"),
  exitBtn = document.querySelector(".settings__button-exit"),
  generatePass = document.querySelector("#generate-1"),
  showPass = document.querySelector("#showPass-1");
showPass.addEventListener("change", (event) => {
  let target = event.target;
  if (target.checked) {
    settingsPassword.setAttribute("type", "text");
    settingsConfPass.setAttribute("type", "text");
  } else {
    settingsPassword.setAttribute("type", "password");
    settingsConfPass.setAttribute("type", "password");
  }
});

generatePass.addEventListener("change", (event) => {
  let target = event.target;
  if (target.checked) {
    let randomPassword = Math.random().toString(36).slice(-8);
    settingsPassword.value = randomPassword;
    settingsConfPass.value = randomPassword;
  } else {
    settingsPassword.value = "";
    settingsConfPass.value = "";
  }
});
settingsLogin.value = _lsUsers[_currentUser[0].userID].login;
settingsPassword.value = _lsUsers[_currentUser[0].userID].password;
settingsConfPass.value = _lsUsers[_currentUser[0].userID].password;

saveBtn.addEventListener("click", () => {
  if (settingsLogin.value != "" && settingsPassword.value != "") {
    if (settingsPassword.value == settingsConfPass.value) {
      _lsUsers[_currentUser[0].userID].login = settingsLogin.value;
      _lsUsers[_currentUser[0].userID].password = settingsPassword.value;
      _currentUser[0].login=settingsLogin.value;
      localStorage.setItem("users-list",JSON.stringify(_lsUsers));
        localStorage.setItem("current-user",JSON.stringify(_currentUser));
      window.location.href= "./notes.html"
    } else {
      alert("пароли не совпадают!!!");
    }
  } else {
    alert("Не все полня заполнены!!!");
  }
});
exitBtn.addEventListener("click",()=>{
    window.location.href= "./notes.html"

})
