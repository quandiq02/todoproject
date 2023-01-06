import {
  _localStorageNotes as _lsNotes,
  btnAddNote,
  dateInfo,
  noteInfo,
  taskCheckbox,
} from "./vars.js";

let notes = [],
  data = {};

function addLocalStorage() {
  btnAddNote.addEventListener("click", () => {
    if (noteInfo.value != "" && dateInfo.value != "") {
      let _localStorage = JSON.parse(localStorage.getItem("notes")) ?? [];
      let i = JSON.parse(localStorage.getItem("count")) ?? 0;
      notes = Object.assign([], _localStorage);
      if (notes.length == 0) {
        data.id = i;
        data.target = noteInfo.value;
        data.date = dateInfo.value;
        data.importance = taskCheckbox.checked;
        data.done = false;
        notes.push(data);
        i++;
      } else {
        notes.push({});
        notes[i].id = i;
        notes[i].target = noteInfo.value;
        notes[i].date = dateInfo.value;
        notes[i].importance = taskCheckbox.checked;
        notes[i].done = false;
        i++;
      }
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  });
}
export { addLocalStorage };
