import { alertInfo } from "../notes/alertInfo.js";
let signinBtn = document.querySelector(".signin__btn") ?? [];
signinBtn.addEventListener("click", () => {
  let _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? [],
    userLogin = document.querySelector("#login-1"),
    userPassword = document.querySelector("#password-1"),
    count = 0;
  if (userLogin.value == "admin" && userPassword.value == "admin") {
    let _userCount = JSON.parse(localStorage.getItem("user-count")) ?? 0;
    let arr = [{ login: userLogin.value, userID: _userCount ,isAdmin:true}];
    localStorage.setItem("current-user", JSON.stringify(arr));
    let _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? [];
    let adminObj = {
      id: _userCount,
      login: "admin",
      password: "admin",
      isAdmin: true,
      canAdd: true,
      canEdit: true,
      canDelete: true,
      bio: "",
    };
    let k =0;
    _lsUsers.forEach(elem => {
      if(elem.login=="admin" && elem.password =="admin"){
        k++;
      }
    });
    if(k==1){
        let msg = document.querySelector(".msg") ?? 0;
        msg.textContent = "You've entered to your account!";
        alertInfo();
        setTimeout(() => {
          window.location.href = "../../pages/notes.html";
        }, 2000);

    }else{
      _lsUsers.push(adminObj);
      _userCount++;
      localStorage.setItem("users-list", JSON.stringify(_lsUsers));
      localStorage.setItem("user-count", JSON.stringify(_userCount));
      let msg = document.querySelector(".msg") ?? 0;
      msg.textContent = "You've entered to your account!";
        alertInfo();
        setTimeout(() => {
          window.location.href = "../../pages/notes.html";
        }, 2000);

    }

  }
  _lsUsers.forEach((elem) => {
    if (elem.login == userLogin.value && elem.password == userPassword.value) {
      let arr = [{ login: elem.login, userID: elem.id ,isAdmin : elem.isAdmin}];
      localStorage.setItem("current-user", JSON.stringify(arr));
      let msg = document.querySelector(".msg") ?? 0;
      msg.textContent = "You've entered to your account!";
        alertInfo();
        setTimeout(() => {
          window.location.href = "../../pages/notes.html";
        }, 2000);
    } else {
      count++;
      if (
        count == _lsUsers.length &&
        userLogin.value != "admin" &&
        userPassword.value != "admin"
      ) {
        alert("You entered wrong login or password!!!");
      }
    }
  });
});
