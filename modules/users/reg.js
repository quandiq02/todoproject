import { alertInfo } from "../notes/alertInfo.js";
function signupUser() {
  let saveBtn = document.querySelector(".signup__button-save"),
    userLogin = document.querySelector(".signup__login"),
    userPassword = document.querySelector(".signup__password"),
    userConfirmPass = document.querySelector(".signup__password-confirm"),
    generatePass = document.querySelector("#generate-1"),
    showPass = document.querySelector("#showPass-1"),
    userBio = document.querySelector("#signup__bio"),
    signinBtn = document.querySelector(".signup__button-signin");
  showPass.addEventListener("change", (event) => {
    let target = event.target;
    if (target.checked) {
      userPassword.setAttribute("type", "text");
      userConfirmPass.setAttribute("type", "text");
    } else {
      userPassword.setAttribute("type", "password");
      userConfirmPass.setAttribute("type", "password");
    }
  });

  generatePass.addEventListener("change", (event) => {
    let target = event.target;
    if (target.checked) {
      let randomPassword = Math.random().toString(36).slice(-8);
      userPassword.value = randomPassword;
      userConfirmPass.value = randomPassword;
    } else {
      userPassword.value = "";
      userConfirmPass.value = "";
    }
  });
  let users = [];

  saveBtn.addEventListener("click", () => {
    if (userLogin.value != "" && userPassword.value != "") {
      if (userPassword.value === userConfirmPass.value) {
        let _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? [];
        let i = _lsUsers.length ?? 0;
        users = Object.assign([], _lsUsers);
        users.push({});
        users[i].id = i;
        users[i].login = userLogin.value;
        users[i].password = userPassword.value;
        users[i].isAdmin = false;
        users[i].canAdd = true;
        users[i].canEdit = true;
        users[i].canDelete = true;
        users[i].bio = userBio.value;
        i++;
        localStorage.setItem("users-list", JSON.stringify(users));
        localStorage.setItem("user-count", i);

        let msg = document.querySelector(".msg") ?? 0;
        msg.textContent = "Account has successfully created!";
        alertInfo();
        setTimeout(() => {
          window.location.href = "../../pages/signin.html";
        }, 2000);
      } else {
        alert("Пароли не совпадают!!!");
      }
    } else {
      alert("Все поля не заполнены!!!");
    }
  });
  signinBtn.addEventListener("click", () => {
    window.location.href = "./signin.html";
  });
}

export { signupUser };
