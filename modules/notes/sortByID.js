function sortByID() {
  let _lsNotes = JSON.parse(localStorage.getItem("notes"));
  let _currentUSER = JSON.parse(localStorage.getItem("current-user"));
  let tasks = document.querySelectorAll(".task__item");
  let cats = document.querySelectorAll(".category__item");
  for (let i = 0; i < _lsNotes.length; i++) {
    if (_currentUSER[0].userID != _lsNotes[i].userID) {
      let tasksHide = document.querySelectorAll(`.task__userID-${_lsNotes[i].userID}`);
      for(let k=0;k<tasksHide.length;k++){
        tasksHide[k].classList.add('hideOthersbyID')
    }
    }      
  }
  for (let i = 0; i < _lsNotes.length; i++) {
    if (_currentUSER[0].userID != _lsNotes[i].userID) {
      let catsHide = document.querySelectorAll(`.category__userID-${_lsNotes[i].userID}`);
      for(let k=0;k<catsHide.length;k++){
        catsHide[k].classList.add('hideOthersbyID')
    }
    }      
  }
 
}
export { sortByID };
