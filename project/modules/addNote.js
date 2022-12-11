function addNote() {
    let dateInfo = document.querySelector('#date-1'),
        noteInfo = document.querySelector('#note-1'),
        btnAddNote = document.querySelector('.addNoteBtn'),
        tasksBlock = document.querySelector('.tasks-block'),
        taskCheckbox = document.querySelector('#check-1');

    const notesLocal = localStorage.getItem('notes');
    let notesInfo = JSON.parse(notesLocal);
    btnAddNote.addEventListener('click', () => {
        if (notesInfo[i].target != "" && dateInfo.value != "") {
            const taskItem =
                `
            <div class="task__item">
            <span class="task-condition"></span>
            <div class="task-name">${notesInfo[i].target}</div>
            <div class="task-date">${dateInfo.value}, 00:00:00</div>
            <button class="task-delete">Delete</button>
            <button class="task-edit">Edit</button>
            </div>
            `
            tasksBlock.insertAdjacentHTML('afterend', taskItem);

            let taskCond = document.querySelector('.task-condition'),
                taskName = document.querySelector('.task-name'),
                taskDate = document.querySelector('.task-date');
            if (taskCheckbox.checked == true) {
                taskCond.style.background = `#ffa500`
            }
            taskCheckbox.checked = false;


            function taskDone() {
                if (taskName.style.textDecoration == "line-through") {
                    taskName.style.textDecoration = "none";
                    taskDate.style.textDecoration = "none"
                    if (taskCheckbox.checked == true) {
                        taskCond.style.background = `#ffa500`
                    } else {
                        taskCond.style.background = `#ff0000`

                    }

                } else {
                    taskDate.style.textDecoration = "line-through"
                    taskName.style.textDecoration = "line-through";
                    taskCond.style.background = "#3bc43b"
                }
            }
            taskName.addEventListener('click', taskDone);
            taskDate.addEventListener('click', taskDone);
            i++;
        } else {
            alert('Заполните все поля!')
        }

    })
}


export {
    addNote
};