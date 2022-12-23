//Task Done code
import { doneContent, importantContent, inprocessContent } from "./vars.js";

function taskDone(event) {
  let target = event.target;
  let index = target.getAttribute("data-item");
  let _lsNotes = JSON.parse(localStorage.getItem("notes")),
    taskName = document.querySelector(`.task-name-${index}`),
    taskDate = document.querySelector(`.task-date-${index}`),
    taskCond = document.querySelector(`.task-condition-${index}`);

  if (taskDate.style.textDecoration == "line-through") {
    taskName.style.textDecoration = "none";
    taskDate.style.textDecoration = "none";
    _lsNotes[index].done = false;
    if (_lsNotes[index].importance == true) {
      taskCond.style.background = `#ff0000`;
    } else {
      taskCond.style.background = `#ffa500`;
    }
  } else {
    taskDate.style.textDecoration = "line-through";
    taskName.style.textDecoration = "line-through";
    taskCond.style.background = "#3bc43b";
    _lsNotes[index].done = true;
  }

  if (_lsNotes[index].done == true) {
    doneContent.appendChild(document.querySelector(`.category__item-${index}`));
  } else {
    if (_lsNotes[index].importance == true) {
      importantContent.appendChild(
        document.querySelector(`.category__item-${index}`)
      );
    } else {
      inprocessContent.appendChild(
        document.querySelector(`.category__item-${index}`)
      );
    }
  }
  localStorage.setItem("notes", JSON.stringify(_lsNotes));
}

export { taskDone };
