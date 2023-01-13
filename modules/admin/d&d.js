function DragAndDrop() {
  let dragElem = document.querySelectorAll(".permission-drag__item"),
    dragChoice = document.querySelectorAll(".permission-drag__zone"),
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
    let _lsUsers = JSON.parse(localStorage.getItem("users-list")),
      index = this.getAttribute("data-item");
    if (this.parentNode.classList.contains("permission-active")) {
      if (this.classList.contains("permission__canEdit")) {
        _lsUsers[index].canEdit = true;
      } else if (this.classList.contains("permission__canAdd")) {
        _lsUsers[index].canAdd = true;
      } else if (this.classList.contains("permission__canDelete")) {
        _lsUsers[index].canDelete = true;
      }
    } else {
      if (this.classList.contains("permission__canEdit")) {
        _lsUsers[index].canEdit = false;
      } else if (this.classList.contains("permission__canAdd")) {
        _lsUsers[index].canAdd = false;
      } else if (this.classList.contains("permission__canDelete")) {
        _lsUsers[index].canDelete = false;
      }
    }
    localStorage.setItem("users-list", JSON.stringify(_lsUsers));
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

export { DragAndDrop };
