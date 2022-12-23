import {
  _localStorageNotes as _lsNotes,
  dateInfo,
  noteInfo,
  btnAddNote,
  taskCheckbox,
  catsBlock,
  searchInput,
} from "./vars.js";
import { sortCategories } from "./sortCategories.js";
import { taskDone } from "./taskDone.js";
import { deleteNote } from "./deleteNote.js";

function addNote() {
  btnAddNote.addEventListener("click", function () {
    let i = JSON.parse(localStorage.getItem("count")) ?? 0;
    let _lsNotes = JSON.parse(localStorage.getItem("notes"));
    if (noteInfo.value != "" && dateInfo.value != "") {
      const taskItem = `
                    <div class="task__item task__item-${_lsNotes[i].id}" data-item="${_lsNotes[i].id}">
                    <span class="task-condition task-condition-${_lsNotes[i].id}"></span>
                    <div class="task-name task-name-${_lsNotes[i].id}" data-item="${_lsNotes[i].id}">${_lsNotes[i].target}</div>
                    <div class="task-date task-date-${_lsNotes[i].id}" data-item="${_lsNotes[i].id}">${_lsNotes[i].date}, 00:00:00</div>
                    <button class="task-delete" data-item="${_lsNotes[i].id}">Delete</button>
                    <button class="task-edit">Edit</button>
                    </div>
                    `;
      const catItem = `
            <div class="category__item category__item-${_lsNotes[i].id}" data-item="${_lsNotes[i].id}">
                <div class="category__note category__note-${_lsNotes[i].id}" data-item="${_lsNotes[i].id}">${_lsNotes[i].target}</div>
                <div class="category__date category__date-${_lsNotes[i].id}" data-item="${_lsNotes[i].id}">${_lsNotes[i].date}</div>
                <div class="category__btn">
                    <button class="category__btn-delete data-item="${_lsNotes[i].id}"">Delete</button>
                    <button class="category__btn-edit">Edit</button>
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

      sortCategories();

      taskName.addEventListener("click", taskDone);
      taskDate.addEventListener("click", taskDone);
      deleteNote();
    } else {
      alert("Заполните все поля!");
    }
    taskCheckbox.checked = false;
    noteInfo.value = "";
    i++;
    localStorage.setItem("count", JSON.stringify(i));
  });
}

export { addNote };
