import { alertInfo } from "../notes/alertInfo.js";

let  _currentUser = JSON.parse(localStorage.getItem("current-user")),
  settingsLogin = document.querySelector("#settings__login-input"),
  settingsPassword = document.querySelector("#settings__password-input"),
  settingsConfPass = document.querySelector("#settings__password-confirm"),
  settingsBio = document.querySelector(".settings__bio"),
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
let _lsUsers = JSON.parse(localStorage.getItem("users-list"));
let filtredCurrentUser = _lsUsers.filter(
  (item) => item.id == _currentUser[0].userID
);
console.log(filtredCurrentUser);
settingsLogin.value = filtredCurrentUser[0].login;
settingsPassword.value = filtredCurrentUser[0].password;
settingsConfPass.value = filtredCurrentUser[0].password;
settingsBio.value = filtredCurrentUser[0].bio;

saveBtn.addEventListener("click", () => {
  if (settingsLogin.value != "" && settingsPassword.value != "") {
    if (settingsPassword.value == settingsConfPass.value) {
      if (filtredCurrentUser[0].password != settingsPassword.value || filtredCurrentUser[0].login != settingsLogin.value) {
        filtredCurrentUser[0].login = settingsLogin.value;
        filtredCurrentUser[0].password = settingsPassword.value;
  
        let filtredUsers = _lsUsers.filter(
          (item) => item.id != filtredCurrentUser[0].idlogin
        );
        filtredUsers.push(filtredCurrentUser[0]);
        _currentUser[0].login = settingsLogin.value;
        localStorage.setItem("users-list", JSON.stringify(filtredUsers));
        localStorage.removeItem("current-user", JSON.stringify(_currentUser));
        let msg = document.querySelector(".msg") ?? 0;
        msg.textContent = "Changes have successfully changed!";
        alertInfo();
        setTimeout(() => {
          window.location.href = "../signin.html";
        }, 2000);
      } 
      else if(filtredCurrentUser[0].bio != settingsBio.value){
        filtredCurrentUser[0].bio = settingsBio.value;
        let filtredUsers = _lsUsers.filter(
          (item) => item.id != filtredCurrentUser[0].id
        );
        filtredUsers.push(filtredCurrentUser[0]);
        _currentUser[0].login = settingsLogin.value;
        localStorage.setItem("users-list", JSON.stringify(filtredUsers));
        let msg = document.querySelector(".msg") ?? 0;
        msg.textContent = "Changes have successfully changed!";
        alertInfo();
        setTimeout(() => {
          window.location.href = "./notes.html";
        }, 2000);
      }
      else {
        let msg = document.querySelector(".msg") ?? 0;
        msg.textContent = "No changes detected!";
        alertInfo();
        setTimeout(() => {
          window.location.href = "./notes.html";
        }, 2000);
      }
    } else {
      alert("пароли не совпадают!!!");
    }
  } else {
    alert("Не все полня заполнены!!!");
  }
});
exitBtn.addEventListener("click", () => {
  window.location.href = "./notes.html";
});
