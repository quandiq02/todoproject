function sortNotesbyDD() {
  let _lsNotes = JSON.parse(localStorage.getItem("notes")) ?? [];
  _lsNotes.forEach((elem) => {
    let taskCond = document.querySelector(`.task__item-${elem.id} .task-condition`),
      taskDate = document.querySelector(`.task__item-${elem.id} .task-date`),
      taskName = document.querySelector(`.task__item-${elem.id} .task-name`);
    if (elem.done == true) {
        taskDate.style.textDecoration = "line-through";
        taskName.style.textDecoration = "line-through";
        taskCond.style.background = "#3bc43b";}
      else{
         if (elem.importance == false) {
            taskCond.style.background = `#ffa500`;
            taskDate.style.textDecoration = "none";
            taskName.style.textDecoration = "none";
          }else
           {
           taskCond.style.background = `#ff0000`;
           taskDate.style.textDecoration = "none";
           taskName.style.textDecoration = "none";
          }
    } 
  });
}

export { sortNotesbyDD };
