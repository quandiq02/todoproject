import { alertInfo } from "../notes/alertInfo.js";
import { DragAndDrop } from "./d&d.js";
function editUser() {
  let m = JSON.parse(localStorage.getItem("user-count"));
  let editUserBtn = document.querySelectorAll(".admin__btn-change");
  editUserBtn[0].addEventListener("click", (event) => {
    let target = event.target;
    let index = target.getAttribute("data-item");
    let _lsUsers = JSON.parse(localStorage.getItem("users-list"));

    let filtredCurrentUser = _lsUsers.filter((item) => item.id == index);
    const modalEdit = `
    <div id="editModal" class="edit__modal edit__modal-${index}">
    <!-- Modal content -->
    <div class="edit-modal__content edit-modal__content-${index}">
        <div class="edit-modal__title">Settings</div>
        <div class="edit-modal__input">
            <input type="text" value="${filtredCurrentUser[0].login}" class="edit-modal__user-input" id="editModalUserinput">
            <input type="password" value="${filtredCurrentUser[0].password}" class="edit-modal__pass-input" id="editModalPassinput">
        </div>
        <div class="edit-modal__checkbox">
            <div class="edit-modal__generate">
                <input type="checkbox" name="edit-modal-generate" id="generate-1">
                <label for="generate-1" class="edit-modal__generate-title">Generate</label>
            </div>
            <div class="edit-modal__makeadmin">
                <input type="checkbox" class="edit-modal__makeAdmin edit-modal__makeAdmin-${index}" id="makeAdminEdit">
                <label for="makeAdminEdit" class="edit-modal__makeAdmin-title">Make Admin</label>
            </div>
            <div class="edit-modal__showPass">
                <input type="checkbox" name="edit-modal-showPass" id="showPass-1">
                <label for="showPass-1" class="edit-modal__showPass-title">Show Password</label>
            </div>
        </div>
        <div class="edit-modal__permission permission">
            <div class="permission-active permission-drag__zone">
                <div class="permission-active__title">
                    Active
                </div>
                <div class="permission__canEdit permission-drag__item" data-item="${index}" draggable="true">
                     canEdit
                </div>
                <div class="permission__canDelete permission-drag__item" data-item="${index}" draggable="true">
                    canDelete
                </div>
                <div class="permission__canAdd permission-drag__item" data-item="${index}" draggable="true">
                    canAdd
                </div>
            </div>
            <div class="permission-disabled permission-drag__zone">
                <div class="permission-disabled__title">
                    Disabled
                </div>
            </div>
        </div>
        <div class="edit-modal__button button">
            <button class="edit-modal__button-exit edit-modal__button-exit-${index}">Exit</button>
            <button class="edit-modal__button-save edit-modal__button-save-${index}">Save</button>
        </div>
    </div>
</div>
        `;

    let adminlistItem = document.querySelectorAll(".admin__list-item");
    adminlistItem[index].insertAdjacentHTML("beforeend", modalEdit);
    let permissionCanAdd = document.querySelector(".permission__canAdd"),
      permissionCanEdit = document.querySelector(".permission__canEdit"),
      permissionCanDelete = document.querySelector(".permission__canDelete"),
      permissionDisabled = document.querySelector(".permission-disabled");
    if (_lsUsers[index].canAdd == false) {
      permissionDisabled.appendChild(permissionCanAdd);
    }
    if (_lsUsers[index].canEdit == false) {
      permissionDisabled.appendChild(permissionCanEdit);
    }
    if (_lsUsers[index].canDelete == false) {
      permissionDisabled.appendChild(permissionCanDelete);
    }
    DragAndDrop();
    let editModalPass = document.querySelector(".edit-modal__pass-input");
    let showPassBtn = document.querySelector("#showPass-1");
    showPassBtn.addEventListener("change", (event) => {
      console.log("click");
      let target = event.target;
      if (target.checked) {
        editModalPass.setAttribute("type", "text");
      } else {
        editModalPass.setAttribute("type", "password");
      }
    });
    let generatePassBtn = document.querySelector("#generate-1");
    generatePassBtn.addEventListener("change", (event) => {
      let target = event.target;
      if (target.checked) {
        let randomPassword = Math.random().toString(36).slice(-8);
        editModalPass.value = randomPassword;
      } else {
        editModalPass.value = filtredCurrentUser[0].password;
      }
    });
    let makeAdmin = document.querySelector(`.edit-modal__makeAdmin-${index}`);
    makeAdmin.checked = _lsUsers[index].isAdmin;
    let popupEdit = document.querySelector(`.edit__modal-${index}`);
    popupEdit.style.display = "block";
    let closePopupBtn = document.querySelector(
      `.edit-modal__button-exit-${index}`
    );
    closePopupBtn.addEventListener("click", () => {
      popupEdit.remove();
    });
    window.addEventListener("click", (event) => {
      if (event.currentTarget == popupEdit) {
        popupEdit.style.display = "none";
      }
    });

    let saveBtn = document.querySelector(`.edit-modal__button-save-${index}`);
    saveBtn.addEventListener("click", () => {
      let _lsUsers = JSON.parse(localStorage.getItem("users-list")),
        newUser = document.querySelector(".edit-modal__user-input"),
        newPass = document.querySelector(".edit-modal__pass-input"),
        oldUser = document.querySelector(
          `.admin__list-item-${index} .admin__list-name`
        );
      if (
        _lsUsers[index].login.value != newUser.value ||
        _lsUsers[index].password.value != newPass.value ||
        _lsUsers[index].isAdmin != makeAdmin.checked
      ) {
        _lsUsers[index].login = newUser.value;
        _lsUsers[index].password = newPass.value;
        _lsUsers[index].isAdmin = makeAdmin.checked;
        oldUser.textContent = newUser.value;

        let msg = document.querySelector(".msg") ?? 0;
        msg.textContent = "Data has been updated";
        alertInfo();
        localStorage.setItem("users-list", JSON.stringify(_lsUsers));
        popupEdit.style.display = "none";

        popupEdit.remove();
      } else {
        let msg = document.querySelector(".msg") ?? 0;
        msg.textContent = "No changes detected";
        alertInfo();
        popupEdit.remove();
      }
    });
  });
}
export { editUser };
