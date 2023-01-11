import { saveUsers } from "./admin/saveUsers.js";
import { showPass, generatePass } from "./admin/passCheckboxes.js";
import { addUser } from "./admin/addUser.js";

saveUsers();
showPass();
generatePass();
addUser();

let closeBtn = document.querySelector(".back-btn");
closeBtn.addEventListener("click", () => {
  window.location.href = "./notes.html";
});
