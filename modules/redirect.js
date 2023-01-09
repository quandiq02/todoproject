let signinBtn = document.querySelector(".signin__btn") ?? 0,
  logoutBtn = document.querySelector(".user__logout") ?? 0,
  settingsBtn = document.querySelector(".user__profile") ?? 0;
if (signinBtn) {
  signinBtn.addEventListener("click", () => {
    let loginInput = document.querySelector("#login-1"),
      passwordInput = document.querySelector("#password-1");
    if ("admin" == loginInput.value && "admin" == passwordInput.value) {
      window.location.href = "../pages/notes.html";
    }
  });
}
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
