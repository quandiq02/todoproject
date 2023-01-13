function sortByID() {
  let _lsNotes = JSON.parse(localStorage.getItem("notes")) ?? [],
    _lsUsers = JSON.parse(localStorage.getItem("users-list")) ?? 0;
  let _currentUSER = JSON.parse(localStorage.getItem("current-user"));
  for (let i = 0; i < _lsNotes.length; i++) {
    if (_currentUSER[0].userID != _lsNotes[i].userID) {
      let tasksHide = document.querySelectorAll(
        `.task__userID-${_lsNotes[i].userID}`
      );
      for (let k = 0; k < tasksHide.length; k++) {
        tasksHide[k].classList.add("hideOthersbyID");
      }
    }
  }
  for (let i = 0; i < _lsNotes.length; i++) {
    if (_currentUSER[0].userID != _lsNotes[i].userID) {
      let catsHide = document.querySelectorAll(
        `.category__userID-${_lsNotes[i].userID}`
      );
      for (let k = 0; k < catsHide.length; k++) {
        catsHide[k].classList.add("hideOthersbyID");
      }
    }
  }
    if (_currentUSER[0].isAdmin == true) {
      for (let k = 0; k < _lsNotes.length; k++) {
        let catsHide = document.querySelectorAll(`.category__item`);
        let tasksHide = document.querySelectorAll(`.task__item`);
        tasksHide[k].classList.remove("hideOthersbyID");
        catsHide[k].classList.remove("hideOthersbyID");
      }
    }
}
export { sortByID };
