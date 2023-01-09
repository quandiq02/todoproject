let _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? [],
  _userCount = JSON.parse(localStorage.getItem("user-count")) ?? 0;
function saveUsers() {
  for (let i = 0; i < _lsUsers.length; i++) {
    let userItem = `
          <li class="admin__list-item admin__list-item-${i}">
              <div class="admin__list-name">${_lsUsers[i].login}</div>
              <div class="admin__list-buttons">
                   <button class="admin__btn-delete admin__btn-delete-${i}" data-item="${i}">Delete</button>
                   <button class="admin__btn-change admin__btn-change-${i}" data-item="${i}">Change</button>
              </div>
          </li>
          `;
    let userList = document.querySelector("#here");
    userList.insertAdjacentHTML("afterend", userItem);
  }
}
saveUsers();
let generatePass = document.querySelector("#generate-1"),
  showPass = document.querySelector("#showPass-1"),
  signinBtn = document.querySelector(".signup__button-signin"),
  addUserLogin = document.querySelector(".admin__login"),
  addUserPassword = document.querySelector(".admin__password"),
  makeAdminCheckbox = document.querySelector("#makeAdmin-1"),
  addUserBtn = document.querySelector(".admin__adduser-btn");
showPass.addEventListener("change", (event) => {
  let target = event.target;
  if (target.checked) {
    addUserPassword.setAttribute("type", "text");
  } else {
    addUserPassword.setAttribute("type", "password");
  }
});

generatePass.addEventListener("change", (event) => {
  let target = event.target;
  if (target.checked) {
    let randomPassword = Math.random().toString(36).slice(-8);
    addUserPassword.value = randomPassword;
  } else {
    addUserPassword.value = "";
  }
});

addUserBtn.addEventListener("click", () => {
  if (addUserLogin.value != "" && addUserPassword != "") {
    _userCount = JSON.parse(localStorage.getItem("user-count")) ?? 0;
    _lsUsers.push({});
    _lsUsers[_userCount].id = _userCount;
    _lsUsers[_userCount].login = addUserLogin.value;
    _lsUsers[_userCount].password = addUserPassword.value;
    _lsUsers[_userCount].isAdmin = makeAdminCheckbox.checked;
    _lsUsers[_userCount].canAdd = true;
    _lsUsers[_userCount].canEdit = true;
    _lsUsers[_userCount].canDelete = true;
    _lsUsers[_userCount].bio = "";

    let userItem = `
    <li class="admin__list-item admin__list-item-${_userCount}">
    <div class="admin__list-name">${_lsUsers[_userCount].login}</div>
    <div class="admin__list-buttons">
         <button class="admin__btn-delete admin__btn-delete-${_userCount}" data-item="${_userCount}">Delete</button>
         <button class="admin__btn-change admin__btn-change-${_userCount}" data-item="${_userCount}">Change</button>
    </div>
</li>
`;
    let userList = document.querySelector("#here");
    userList.insertAdjacentHTML("afterend", userItem);
    _userCount++;
    localStorage.setItem("users-list", JSON.stringify(_lsUsers));
    localStorage.setItem("user-count", _userCount);


  } else {
    alert("Все поля не заполнены!!!");
  }
});
let closeBtn = document.querySelector('.back-btn');
closeBtn.addEventListener('click',()=>{
    window.location.href= "./notes.html"
})
// function removeUsers() {
//   let removeBtn = document.querySelector(".admin__btn-delete");
//   removeBtn.addEventListener("click", (event) => {
//     let k = JSON.parse(localStorage.getItem("user-count"));
//     let target = event.target;
//     let index = target.getAttribute("data-item");
//     let filtredUsers = _lsUsers.filter((item) => item.id != index);
//     localStorage.setItem("users-list", JSON.stringify(filtredUsers));
//     document.querySelector(`.admin__list-item-${index}`).remove();
//     k--;
//     if (k == 0) {
//       localStorage.removeItem("notes");
//       localStorage.removeItem("count");
//     }
//     localStorage.setItem("user-count", JSON.stringify(k));
//   });
// }
