function sortByDragDrop() {
  let _lsNotes = JSON.parse(localStorage.getItem("notes")) ?? [],
    _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? 0;
  let _currentUSER = JSON.parse(localStorage.getItem("current-user"));
  _lsUsers.forEach((elem) => {
    if (
      elem.login == _currentUSER[0].login &&
      elem.id == _currentUSER[0].userID
    ) {
      if (elem.canAdd == false) {
        let NoteField = document.querySelector(".header__input");
        NoteField.style.display = "none";
      }
      if (elem.canEdit == false) {
        let editTaskBtn = document.querySelectorAll(
            `.task__userID-${
              _lsNotes[_currentUSER[0].userID].userID
            } .task-edit`
          ),
          editCatBtn = document.querySelectorAll(
            `.category__userID-${
              _lsNotes[_currentUSER[0].userID].userID
            } .category__btn-edit`
          );
        editTaskBtn.forEach((e) => {
          e.style.display = "none";
        });
        editCatBtn.forEach((e) => {
          e.style.display = "none";
        });
      }
      if (elem.canDelete == false) {
        let editTaskBtn = document.querySelectorAll(
            `.task__userID-${
              _lsNotes[_currentUSER[0].userID].userID
            } .task-delete`
          ),
          editCatBtn = document.querySelectorAll(
            `.category__userID-${
              _lsNotes[_currentUSER[0].userID].userID
            } .category__btn-delete`
          );
        editTaskBtn.forEach((e) => {
          e.style.display = "none";
        });
        editCatBtn.forEach((e) => {
          e.style.display = "none";
        });
      }
    }
  });
}

export { sortByDragDrop };
