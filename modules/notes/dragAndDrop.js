import { sortNotesbyDD } from "./sortNotesbyDD.js";

function DraggableAndDropable() {
  let dragElem = document.querySelectorAll(".category__item"),
    dragChoice = document.querySelectorAll(".category__zone"),
    dragItem = null;

  for (let i of dragElem) {
    i.ondragstart = dragStart;
    i.ondragend = dragEnd;
  }
  function dragStart() {
    dragItem = this;
    setTimeout(() => (this.style.display = "none"), 0);
  }
  function dragEnd() {
    dragItem = null;
    setTimeout(() => (this.style.display = "flex"), 0);
    let _lsNotes = JSON.parse(localStorage.getItem("notes")),
      index = this.getAttribute("data-item"),
      taskCond = document.querySelector(`.task__item-${index} .task-condition`),
      taskDate = document.querySelector(`.task__item-${index} .task-date`),
      taskName = document.querySelector(`.task__item-${index} .task-name`);
    if (this.parentNode.classList.contains("inprocess-content")) {
      _lsNotes[index].done = false;
      _lsNotes[index].importance = false;
    } else if (this.parentNode.classList.contains("important-content")) {
      _lsNotes[index].done = false;
      _lsNotes[index].importance = true;
    } else if (this.parentNode.classList.contains("done-content")) {
      _lsNotes[index].done = true;
    }
    localStorage.setItem("notes", JSON.stringify(_lsNotes));
    sortNotesbyDD();

  }
  for (let x of dragChoice) {
    x.ondragover = dragOver;
    x.ondragenter = dragEnter;
    x.ondragleave = dragLeave;
    x.ondrop = dragDrop;
  }
  function dragOver(e) {
    e.preventDefault();
  }
  function dragEnter(e) {
    e.preventDefault();
  }
  function dragLeave() {}
  function dragDrop() {
    this.append(dragItem);
  }
}

export { DraggableAndDropable };
