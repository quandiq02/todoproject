import {
  _localStorageNotes as _lsNotes,
  dateInfo,
  noteInfo,
  btnAddNote,
  taskCheckbox,
  catsBlock,
  searchInput,
} from "../vars.js";
import { sortCategories } from "./sortCategories.js";
import { taskDone } from "./taskDone.js";
import { deleteNote } from "./deleteNote.js";
import { editNote } from "./editNote.js";

function addNote() {
  btnAddNote.addEventListener("click", function () {
    let _currentUSER =JSON.parse(localStorage.getItem('current-user'));
    let i = JSON.parse(localStorage.getItem("count")) ?? 0;
    let _lsNotes = JSON.parse(localStorage.getItem("notes"));
    if (noteInfo.value != "" && dateInfo.value != "") {
      const taskItem = `
                    <div class="task__item task__item-${i}" data-item="${i}">
                    <span class="task-condition task-condition-${i}"></span>
                    <div class="task-name task-name-${i}" data-item="${i}">${_lsNotes[i].target}</div>
                    <div class="task-date task-date-${i}" data-item="${i}">${_lsNotes[i].date}</div>
                    <button class="task-delete" data-item="${i}">Delete</button>
                    <button class="task-edit" data-item="${i}">Edit</button>
                    </div>
                    `;
      const catItem = `
            <div class="category__item category__item-${i}" data-item="${i}">
                <div class="category__note category__note-${i}" data-item="${i}">${_lsNotes[i].target}</div>
                <div class="category__date category__date-${i}" data-item="${i}">${_lsNotes[i].date}</div>
                <div class="category__btn">
                    <button class="category__btn-delete category__btn-delete-${i}" data-item="${_lsNotes[i].id}">Delete</button>
                    <button class="category__btn-edit category__btn-edit-${i}" data-item="${_lsNotes[i].id}">Edit</button>
                </div>
           </div>
            `;
      searchInput.insertAdjacentHTML("afterend", taskItem);
      catsBlock.insertAdjacentHTML("afterend", catItem);

      let taskName = document.querySelector(".task-name"),
        taskDate = document.querySelector(".task-date"),
        taskCond = document.querySelector(".task-condition");

      if (_lsNotes[i].importance == true) {
        taskCond.style.background = `#ff0000`;
      }

      deleteNote();
      editNote();
      sortCategories();




      taskName.addEventListener("click", taskDone);
      taskDate.addEventListener("click", taskDone);
      taskCheckbox.checked = false;
      noteInfo.value = "";
      dateInfo.value = "";
    } else {
      alert("Заполните все поля!");
    }
  });
}

export { addNote };
