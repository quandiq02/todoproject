window.onload = function () {
  tabChecked();

};

let tabBlock1 = document.querySelector(".tasks-block"),
  tabBlock2 = document.querySelector(".category-block"),
  tabTitle1 = document.querySelector(".tab__title-1"),
  tabTitle2 = document.querySelector(".tab__title-2"),
  tab1 = document.querySelector("#tab-1"),
  tab2 = document.querySelector("#tab-2");

function tabChecked() {
  tabBlock1.style.display = "flex";
  tabBlock2.style.display = "none";
  tabTitle1.style.background = `#2196F3`;
  tabTitle1.style.color = `#fff`;
  tabTitle2.style.background = `#fff`;
  tabTitle2.style.color = `#000`;
}

function tabSettings() {
  tab1.addEventListener("change", tabChecked);
  tab2.addEventListener("change", () => {
    tabBlock1.style.display = "none";
    tabTitle1.style.background = `#fff`;
    tabTitle2.style.color = `#fff`;
    tabTitle1.style.color = `#000`;
    tabBlock2.style.display = "flex";
    tabTitle2.style.background = `#2196F3`;
  });
}
function userTab() {
  let userTabBlock = document.querySelector(".user__tab-menu"),
    userBtn = document.querySelector(".header__user");
  userTabBlock.style.display = "none";
  let _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? [],
    _currentUSER = JSON.parse(localStorage.getItem("current-user"))?? {},
    userPermissions = document.querySelector(".user__permissions"),
    userName = document.querySelector(".user__name");
  _lsUsers.forEach((elem) => {
    if (elem.login == _currentUSER[0].login && elem.isAdmin == false) {
      userPermissions.style.display = "none";
    }
  });
  userName.textContent = _currentUSER[0].login;
  userBtn.addEventListener("click", () => {
    if (userTabBlock.style.display == "none") {
      userTabBlock.style.display = "block";
    } else {
      userTabBlock.style.display = "none";
    }
  });
}

export { tabChecked, tabSettings, userTab };
