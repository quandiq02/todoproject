import { removeUser } from "./removeUser.js";
import { alertInfo } from "../notes/alertInfo.js";
import { editUser } from "./editUserInfo.js";
function addUser() {
  let addUserLogin = document.querySelector(".admin__login"),
    addUserPassword = document.querySelector(".admin__password"),
    makeAdminCheckbox = document.querySelector("#makeAdmin-1"),
    addUserBtn = document.querySelector(".admin__adduser-btn");
  addUserBtn.addEventListener("click", () => {
    if (addUserLogin.value != "" && addUserPassword != "") {
      let _userCount = JSON.parse(localStorage.getItem("user-count")) ?? 0;
      let _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? [],
        _currentUser = JSON.parse(localStorage.getItem("current-user")) ?? [];

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

      removeUser();
      editUser();

      let msg = document.querySelector(".msg") ?? 0;
      msg.textContent = "User added";
      alertInfo();
      _userCount++;
      localStorage.setItem("users-list", JSON.stringify(_lsUsers));
      localStorage.setItem("user-count", _userCount);
      addUserLogin.value = "";
      addUserPassword.value = "";
    } else {
      alert("Все поля не заполнены!!!");
    }
  });
}

export { addUser };
