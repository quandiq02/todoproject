//Deleting note code
function deleteNote() {
  let deleteTaskBtn = document.querySelector(".task-delete"),
    deleteCatBtn = document.querySelectorAll(".category__btn-delete");
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
  // deleteCatBtn[index].addEventListener("click", () => {
  //   let _lsNotes = JSON.parse(localStorage.getItem("notes"));
  //   const filteredArr = _lsNotes.filter((item) => item.id !== index);
  //   localStorage.setItem("notes", JSON.stringify(filteredArr));
  //   console.log("Filtered Arr : " + filteredArr);
  //   document.querySelector(`.task__item-${index}`).remove();
  //   document.querySelector(`.category__item-${index}`).remove();
  // });
}
export { deleteNote };
