import { alertInfo } from "./notes/alertInfo.js";
let permissionBtn = document.querySelector(".user__permissions") ?? 0,
  logoutBtn = document.querySelector(".user__logout") ?? 0,
  settingsBtn = document.querySelector(".user__profile") ?? 0,
  tosSignupBtn = document.querySelector(".signup__redirect") ?? 0;

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("current-user");
    let msg = document.querySelector(".msg") ?? 0;
    msg.textContent = "You've logged out from your account!";
    alertInfo();
    setTimeout(() => {
      window.location.href = "./signin.html";
      
    }, 2000);
  });
}
if (settingsBtn) {
  settingsBtn.addEventListener("click", () => {
    window.location.href = "./settings.html";
  });
}
if (permissionBtn) {
  permissionBtn.addEventListener("click", () => {
    window.location.href = "./admin.html";
  });
}
if (tosSignupBtn) {
  tosSignupBtn.addEventListener("click", () => {
    window.location.href = "./signup.html";
  });
}
