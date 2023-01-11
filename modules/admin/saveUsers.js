import { editUser } from "./editUserInfo.js";
import { removeUser } from "./removeUser.js";

function saveUsers() {
  let _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? [],
    _currentUser = JSON.parse(localStorage.getItem("current-user")) ?? [];
  for (let i = 0; i < _lsUsers.length; i++) {
    if (_currentUser[0].userID == _lsUsers[i].id) {
      let userItem = `
      <li class="admin__list-item admin__list-item-${i}">
          <div class="admin__list-name">${_lsUsers[i].login}</div>
        <div class="current__user-login">Your login</div>
      </li>
      `;
      let userList = document.querySelector("#here");
      userList.insertAdjacentHTML("afterend", userItem);
    } else {
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
      removeUser();
      editUser();
    }
  }
}
export { saveUsers };
