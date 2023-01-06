//Deleting note code
function deleteNote() {
  let deleteTaskBtn = document.querySelector(".task-delete"),
    deleteCatBtn = document.querySelectorAll(".category__btn-delete"),
    m = JSON.parse(localStorage.getItem("count")) ?? 0;
  deleteTaskBtn.addEventListener("click", (event) => {
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
  deleteCatBtn[m].addEventListener("click", (event) => {
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
}
export { deleteNote };
