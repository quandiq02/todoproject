let permissionBtn = document.querySelector(".user__permissions") ?? 0,
  logoutBtn = document.querySelector(".user__logout") ?? 0,
  settingsBtn = document.querySelector(".user__profile") ?? 0,
  tosSignupBtn = document.querySelector(".signup__redirect") ?? 0;

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("current-user");
    window.location.href = "../signup.html";
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
