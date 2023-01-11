import { alertInfo } from "../notes/alertInfo.js";
function removeUser() {
  let removeBtn = document.querySelector(".admin__btn-delete");
  removeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let k = JSON.parse(localStorage.getItem("user-count"));
    let target = event.target;
    let index = target.getAttribute("data-item");
    let _lsUsers = JSON.parse(localStorage.getItem("users-list"));
    let filtredUsers = _lsUsers.filter((item) => item.id != index);
    localStorage.setItem("users-list", JSON.stringify(filtredUsers));
    console.log(`.admin__list-item-${index}`);
    document.querySelector(`.admin__list-item-${index}`).remove();
    k--;
    if (k == 0) {
      localStorage.removeItem("users-list");
      localStorage.removeItem("user-count");
    }
    localStorage.setItem("user-count", JSON.stringify(k));
    let msg = document.querySelector(".msg") ?? 0;
    msg.textContent = "User removed";
    alertInfo();
  });
}
export { removeUser };
