function showPass() {
  let showPassBtn = document.querySelector("#showPass-1");
  showPassBtn.addEventListener("change", (event) => {
    let target = event.target,
      addUserPassword = document.querySelector(".admin__password");
    if (target.checked) {
      addUserPassword.setAttribute("type", "text");
    } else {
      addUserPassword.setAttribute("type", "password");
    }
  });
}
function generatePass() {
  let generatePassBtn = document.querySelector("#generate-1");
  generatePassBtn.addEventListener("change", (event) => {
    let target = event.target,
      addUserPassword = document.querySelector(".admin__password");
    if (target.checked) {
      let randomPassword = Math.random().toString(36).slice(-8);
      addUserPassword.value = randomPassword;
    } else {
      addUserPassword.value = "";
    }
  });
}

export { showPass, generatePass };
