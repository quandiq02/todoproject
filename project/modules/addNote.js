function addNote() {
    let dateInfo = document.querySelector('#date-1'),
        noteInfo = document.querySelector('#note-1'),
        btnAddNote = document.querySelector('.addNoteBtn'),
        catsBlock = document.querySelector('.important-content'),
        taskCheckbox = document.querySelector('#check-1'),
        searchInput = document.querySelector('#search-1'),
        catBtn = document.querySelector('.tab__title-2'),

        i = 0;
    btnAddNote.addEventListener('click', function () {
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if (noteInfo.value != "" && dateInfo.value != "") {
            const taskItem =
                `
                    <div class="task__item task__item-${localNotes[i].id}">
                    <span class="task-condition"></span>
                    <div class="task-name">${localNotes[i].target}</div>
                    <div class="task-date">${localNotes[i].date}, 00:00:00</div>
                    <button class="task-delete">Delete</button>
                    <button class="task-edit">Edit</button>
                    </div>
                    `
            const catItem =
                `
            <div class="category__item category__item-${localNotes[i].id}">
                <div class="category__note ">${localNotes[i].target}</div>
                <div class="category__date">${localNotes[i].date}</div>
                <div class="category__btn">
                    <button class="category__btn-delete">Delete</button>
                    <button class="category__btn-edit">Edit</button>
                </div>
           </div>
            `
            searchInput.insertAdjacentHTML('afterend', taskItem);
            catsBlock.insertAdjacentHTML('afterend', catItem);
            let taskCond = document.querySelector('.task-condition'),
                taskName = document.querySelector('.task-name'),
                taskDate = document.querySelector('.task-date'),
                index = localNotes[i].id;
            let importantContent = document.querySelector('.important-content'),
                inprocessContent = document.querySelector('.inprocess-content'),
                doneContent = document.querySelector('.done-content');
            if (localNotes[i].importance == true) {
                taskCond.style.background = `#ff0000`
            }

            function sortCategories() {
                if (localNotes[i].done == true) {
                    doneContent.appendChild(document.querySelector(`.category__item-${i}`));
                } else {
                    if (localNotes[i].importance == true) {

                        importantContent.appendChild(document.querySelector(`.category__item-${i}`));
                    } else {

                        inprocessContent.appendChild(document.querySelector(`.category__item-${i}`));
                    }
                }
            }

            function taskDone() {
                if (taskDate.style.textDecoration == "line-through") {
                    taskName.style.textDecoration = "none";
                    taskDate.style.textDecoration = "none";
                    localNotes[index].done = false;
                    if (localNotes[index].importance == true) {
                        taskCond.style.background = `#ff0000`
                    } else {
                        taskCond.style.background = `#ffa500`
                    }
                } else {
                    taskDate.style.textDecoration = "line-through"
                    taskName.style.textDecoration = "line-through";
                    taskCond.style.background = "#3bc43b"
                    localNotes[index].done = true;
                }

                if (localNotes[index].done == true) {
                    doneContent.appendChild(document.querySelector(`.category__item-${index}`));
                } else {
                    if (localNotes[index].importance == true) {

                        importantContent.appendChild(document.querySelector(`.category__item-${index}`));
                    } else {

                        inprocessContent.appendChild(document.querySelector(`.category__item-${index}`));
                    }
                }
            }



            taskName.addEventListener('click', taskDone);
            taskDate.addEventListener('click', taskDone);
            sortCategories()


        } else {
            alert('Заполните все поля!')
        }
        i++;
        taskCheckbox.checked=false;
    })
}


export {
    addNote
};