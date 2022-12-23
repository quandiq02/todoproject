import {
  _localStorageNotes as _lsNotes,
  btnAddNote,
  dateInfo,
  noteInfo,
  taskCheckbox,
} from "./vars.js";

let notes = [],
  data = {},
  index = 1,
  id = 0;

function addLocalStorage() {
  btnAddNote.addEventListener("click", () => {
    if (noteInfo.value != "" && dateInfo.value != "") {
      let _localStorage = JSON.parse(localStorage.getItem("notes")) ?? [];
      notes = Object.assign([], _localStorage);
      if (notes.length == 0) {
        data.id = id;
        data.target = noteInfo.value;
        data.date = dateInfo.value;
        data.importance = taskCheckbox.checked;
        data.done = false;
        notes.push(data);
        id++;
      } else {
        notes.push({});
        notes[index].id = id;
        notes[index].target = noteInfo.value;
        notes[index].date = dateInfo.value;
        notes[index].importance = taskCheckbox.checked;
        notes[index].done = false;
        index++;
        id++;
      }
    }
    localStorage.setItem("notes", JSON.stringify(notes));
  });
}
export { addLocalStorage };
