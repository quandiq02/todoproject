//Searching note code
import { searchInput } from "../vars.js";

function searchNote() {
  searchInput.addEventListener("input", () => {
    let val = searchInput.value.trim();
    let items = document.querySelectorAll(".task__item");
    if (val != "") {
      items.forEach(function (elem) {
        if (elem.innerText.search(val) == -1) {
          elem.classList.add("hideSearch");
        } else {
          elem.classList.remove("hideSearch");
        }
      });
    } else {

      items.forEach(function (elem) {
          elem.classList.remove("hideSearch");
      });
    }
  });
}
export { searchNote };
