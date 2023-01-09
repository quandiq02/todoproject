let signinBtn = document.querySelector(".signin__btn") ?? [];
signinBtn.addEventListener("click", () => {
  let _lsUsers = JSON.parse(localStorage.getItem("users-list")),
    userLogin = document.querySelector("#login-1"),
    userPassword = document.querySelector("#password-1");
  _lsUsers.forEach((elem) => {
    if (elem.login == userLogin.value && elem.password == userPassword.value) {
      let arr = [{ login: elem.login, userID: elem.id }];
      localStorage.setItem("current-user", JSON.stringify(arr));
      window.location.href = "../../pages/notes.html";
    }else{
      alert('You entered a wrong login or password!!!')
    }
  });
});
