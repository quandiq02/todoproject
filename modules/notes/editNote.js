// Editing Note Code
function editNote() {
  
  let editTaskBtn = document.querySelector(".task-edit"),
    editCatBtn = document.querySelectorAll(".category__btn-edit"),
    m = JSON.parse(localStorage.getItem("count")) ?? 0;

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
                <button type="button" class="close__btn close__btn-task close__btn-task-${index}">Exit</button>
                <button type="button" class="save__btn save__btn-task save__btn-task-${index}">Save</button>
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
      let newTarget = document.querySelector(`.new__target-${index}`),
        newDate = document.querySelector(`.new__date-${index}`),
        oldTargetCat = document.querySelector(`.category__note-${index}`),
        oldDateCat = document.querySelector(`.category__date-${index}`),
        oldTargetTask = document.querySelector(`.task-name-${index}`),
        oldDateTask = document.querySelector(`.task-date-${index}`);
      _lsNotes[index].target = newTarget.value;
      _lsNotes[index].date = newDate.value;
      oldTargetCat.textContent = newTarget.value;
      oldDateCat.textContent = newDate.value;
      oldDateTask.textContent = newDate.value;
      oldTargetTask.textContent = newTarget.value;

      localStorage.setItem("notes", JSON.stringify(_lsNotes));
      popupTask.style.display = "none";
    });
  });
  editCatBtn[m].addEventListener("click", (event) => {
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
      console.log('index : ',index)
      console.log('click')
      let newTarget = document.querySelector(`.new__target-${index}`),
        newDate = document.querySelector(`.new__date-${index}`),
        oldTargetCat = document.querySelector(`.category__note-${index}`),
        oldDateCat = document.querySelector(`.category__date-${index}`),
        oldTargetTask = document.querySelector(`.task-name-${index}`),
        oldDateTask = document.querySelector(`.task-date-${index}`);
      _lsNotes[index].target = newTarget.value;
      _lsNotes[index].date = newDate.value;
      oldTargetCat.textContent = newTarget.value;
      oldDateCat.textContent = newDate.value;
      oldDateTask.textContent = newDate.value;
      oldTargetTask.textContent = newTarget.value;

      localStorage.setItem("notes", JSON.stringify(_lsNotes));
      popupCat.style.display = "none";
    });
  });
}
export { editNote };
