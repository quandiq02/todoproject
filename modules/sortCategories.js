//Sorting in Categories code
import {
  importantContent,
  inprocessContent,
  doneContent,
} from "./vars.js";
let i=0;
function sortCategories() {
  let _lsNotes = JSON.parse(localStorage.getItem("notes"))
  if (_lsNotes[i].done == true) {
    doneContent.appendChild(document.querySelector(`.category__item-${i}`));
  } else {
    if (_lsNotes[i].importance == true) {
      importantContent.appendChild(
        document.querySelector(`.category__item-${i}`)
      );
    } else {
      inprocessContent.appendChild(
        document.querySelector(`.category__item-${i}`)
      );
    }
  }
  i++;
}

export { sortCategories };
