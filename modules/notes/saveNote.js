import {
  searchInput,
  catsBlock,
  inprocessContent,
  importantContent,
  doneContent,
  taskCond,
} from "../vars.js";
import { taskDone } from "./taskDone.js";
import { alertInfo } from "./alertInfo.js";

function saveNote() {
  if (localStorage.getItem("notes")) {
    let _lsNotes = JSON.parse(localStorage.getItem("notes")),
      index = JSON.parse(localStorage.getItem("count"));
    for (let i = 0; i < _lsNotes.length; i++) {
      const taskItem = `
                    <div class="task__item task__item-${i} task__userID-${_lsNotes[i].userID}" data-item="${i}">
                    <span class="task-condition task-condition-${i}"></span>
                    <div class="task-name task-name-${i}" data-item="${i}">${_lsNotes[i].target}</div>
                    <div class="task-date task-date-${i}" data-item="${i}">${_lsNotes[i].date}</div>
                    <button class="task-delete" data-item="${i}">Delete</button>
                    <button class="task-edit" data-item="${i}">Edit</button>
                    </div>
                    `;
      const catItem = `
            <div class="category__item category__item-${i}  category__userID-${_lsNotes[i].userID}" data-item="${i}" draggable="true">
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
      if (_lsNotes[i].importance == false) {
        taskCond.style.background = `#ffa500`;
      }
      if (_lsNotes[i].done == true) {
        taskDate.style.textDecoration = "line-through";
        taskName.style.textDecoration = "line-through";
        taskCond.style.background = "#3bc43b";
      }
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
      taskName.addEventListener("click", taskDone);
      taskDate.addEventListener("click", taskDone);

      let deleteTaskBtn = document.querySelector(".task-delete"),
        deleteCatBtn = document.querySelectorAll(".category__btn-delete");

      deleteTaskBtn.addEventListener("click", (event) => {
        let msg = document.querySelector(".msg") ?? 0;
        msg.textContent = "Note removed";
        alertInfo();
        let k = JSON.parse(localStorage.getItem("count"));
        let target = event.target;
        let index = target.getAttribute("data-item");
        let _lsNotes = JSON.parse(localStorage.getItem("notes"));

        let filtredNotes = _lsNotes.filter((item) => item.id != index);

        localStorage.setItem("notes", JSON.stringify(filtredNotes));

        document.querySelector(`.task__item-${index}`).remove();
        document.querySelector(`.category__item-${index}`).remove();
        k--;
        localStorage.setItem("count", JSON.stringify(k));
        if (k == 0) {
          localStorage.removeItem("notes");
          localStorage.removeItem("count");
        }
      });
      deleteCatBtn[i].addEventListener("click", (event) => {
        let msg = document.querySelector(".msg") ?? 0;
        msg.textContent = "Note removed";
        alertInfo();
        let k = JSON.parse(localStorage.getItem("count"));
        let target = event.target;
        let index = target.getAttribute("data-item");
        let _lsNotes = JSON.parse(localStorage.getItem("notes"));

        let filtredNotes = _lsNotes.filter((item) => item.id != index);

        localStorage.setItem("notes", JSON.stringify(filtredNotes));

        document.querySelector(`.task__item-${index}`).remove();
        document.querySelector(`.category__item-${index}`).remove();
        k--;
        localStorage.setItem("count", JSON.stringify(k));
        if (k == 0) {
          localStorage.removeItem("notes");
          localStorage.removeItem("count");
        }
      });
      let editTaskBtn = document.querySelector(".task-edit"),
        editCatBtn = document.querySelectorAll(".category__btn-edit");

      editTaskBtn.addEventListener("click", (event) => {
        let i = JSON.parse(localStorage.getItem("count"));
        let target = event.target;
        let index = target.getAttribute("data-item");
        let _lsNotes = JSON.parse(localStorage.getItem("notes"));
        const modalTask = `
          <div id="myModal" class="task__modal task__modal-${index}">
           <!-- Modal content -->
              <div class="modal__content modal__content-${index}">
                  <input type="text" class="new__target new__target-${index}" data-item="${i}" value="${_lsNotes[index].target}" />
                  <input type="date" class="new__date new__date-${index}" data-item="${i}" value="${_lsNotes[index].date}"/>
                  <div class="modal__buttons">
                  <button type="button" class="close__btn close__btn-task-${index}">Exit</button>
                  <button type="button" class="save__btn save__btn-task-${index}">Save</button>
                  </div>
              </div>
          </div>
          `;
        let taskItem = document.querySelectorAll(".task__item");
        taskItem[index].insertAdjacentHTML("afterend", modalTask);

        let popupTask = document.querySelector(`.task__modal-${index}`);
        popupTask.style.display = "block";

        let closeBtn = document.querySelector(`.close__btn-task-${index}`);
        closeBtn.addEventListener("click", () => {
          popupTask.style.display = "none";
        });
        window.addEventListener("click", (event) => {
          if (event.currentTarget == popupTask) {
            popupTask.style.display = "none";
          }
        });
        let saveBtn = document.querySelector(`.save__btn-task-${index}`);
        saveBtn.addEventListener("click", () => {
          let msg = document.querySelector(".msg") ?? 0;
          msg.textContent = "Note edited";
          alertInfo();
          let newTarget = document.querySelector(`.new__target-${index}`),
            newDate = document.querySelector(`.new__date-${index}`),
            oldTargetCat = document.querySelector(`.category__note-${index}`),
            oldDateCat = document.querySelector(`.category__date-${index}`),
            oldTargetTask = document.querySelector(`.task-name-${index}`),
            oldDateTask = document.querySelector(`.task-date-${index}`);

          if (
            newTarget.value == oldTargetTask.textContent &&
            newDate.value == oldDateTask.textContent
          ) {
            popupTask.style.display = "none";
          } else {
            _lsNotes[index].target = newTarget.value;
            _lsNotes[index].date = newDate.value;
            oldTargetCat.textContent = newTarget.value;
            oldDateCat.textContent = newDate.value;
            oldDateTask.textContent = newDate.value;
            oldTargetTask.textContent = newTarget.value;
            let msg = document.querySelector(".msg") ?? 0;
            msg.textContent = "Note edited";
            alertInfo();
            localStorage.setItem("notes", JSON.stringify(_lsNotes));
            popupTask.style.display = "none";
          }
        });
      });
      editCatBtn[i].addEventListener("click", (event) => {
        let i = JSON.parse(localStorage.getItem("count"));
        let target = event.target;
        let index = target.getAttribute("data-item");
        let _lsNotes = JSON.parse(localStorage.getItem("notes"));
        const modalCat = `
          <div id="myModal" class="cat__modal cat__modal-${index}">
  
           <!-- Modal content -->
              <div class="modal__content modal__content-${index}">
                  <input type="text" class="new__target new__target-${index}" data-item="${i}" value="${_lsNotes[index].target}" />
                  <input type="date" class="new__date new__date-${index}" data-item="${i}" value="${_lsNotes[index].date}"/>
                  <div class="modal__buttons">
                  <button type="button" class="close__btn close__btn-cat-${index}">Exit</button>
                  <button type="button" class="save__btn save__btn-cat-${index}">Save</button>
                  </div>
              </div>
          </div>
          `;
        let catItem = document.querySelectorAll(".category__item");
        catItem[index].insertAdjacentHTML("afterend", modalCat);

        let popupCat = document.querySelector(`.cat__modal-${index}`);
        popupCat.style.display = "block";

        let closeBtn = document.querySelector(`.close__btn-cat-${index}`);

        closeBtn.addEventListener("click", () => {
          popupCat.style.display = "none";
        });
        window.addEventListener("click", (event) => {
          if (event.currentTarget == popupCat) {
            popupCat.style.display = "none";
          }
        });
        let saveBtn = document.querySelector(`.save__btn-cat-${index}`);
        saveBtn.addEventListener("click", () => {
          let newTarget = document.querySelector(`.new__target-${index}`),
            newDate = document.querySelector(`.new__date-${index}`),
            oldTargetCat = document.querySelector(`.category__note-${index}`),
            oldDateCat = document.querySelector(`.category__date-${index}`),
            oldTargetTask = document.querySelector(`.task-name-${index}`),
            oldDateTask = document.querySelector(`.task-date-${index}`);

          if (
            newTarget.value == oldTargetCat.textContent &&
            newDate.value == oldDateCat.textContent
          ) {
            popupCat.style.display = "none";
          } else {
            _lsNotes[index].target = newTarget.value;
            _lsNotes[index].date = newDate.value;
            oldTargetCat.textContent = newTarget.value;
            oldDateCat.textContent = newDate.value;
            oldDateTask.textContent = newDate.value;
            oldTargetTask.textContent = newTarget.value;

            localStorage.setItem("notes", JSON.stringify(_lsNotes));
            popupCat.style.display = "none";
            let msg = document.querySelector(".msg") ?? 0;
            msg.textContent = "Note edited";
            alertInfo();
          }
        });
      });
      if (_lsNotes[i].done == true) {
        taskCond.style.background = "#3bc43b";
        taskName.style.textDecoration = "line-through";
        taskDate.style.textDecoration = "line-through";
      }
    }
  }
}
export { saveNote };
