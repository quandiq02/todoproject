let signinBtn = document.querySelector(".signin__btn") ?? [];
signinBtn.addEventListener("click", () => {
  let _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? [],
    userLogin = document.querySelector("#login-1"),
    userPassword = document.querySelector("#password-1"),
    count = 0;
  if (userLogin.value == "admin" && userPassword.value == "admin") {
    let _userCount = JSON.parse(localStorage.getItem("user-count")) ?? 0;
    let arr = [{ login: userLogin.value, userID: _userCount }];
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
    _lsUsers.push(adminObj);
    _userCount++;
    localStorage.setItem("users-list", JSON.stringify(_lsUsers));
    localStorage.setItem("user-count", JSON.stringify(_userCount));

    window.location.href = "../../pages/notes.html";
  }
  _lsUsers.forEach((elem) => {
    if (elem.login == userLogin.value && elem.password == userPassword.value) {
      let arr = [{ login: elem.login, userID: elem.id }];
      localStorage.setItem("current-user", JSON.stringify(arr));
      window.location.href = "../../pages/notes.html";
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
