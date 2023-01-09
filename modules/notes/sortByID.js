function sortByID() {
  let _lsNotes = JSON.parse(localStorage.getItem("notes"));
  let _currentUSER = JSON.parse(localStorage.getItem("current-user"));
  let tasks = document.querySelectorAll(".task__item");
  if (tasks && _lsNotes) {
    _lsNotes.forEach((elem) => {
      if (_currentUSER[0].userID != elem.userID) {
        tasks[elem.id].classList.add("hideOthersbyID");
      }
    });
  }
}
export { sortByID };
