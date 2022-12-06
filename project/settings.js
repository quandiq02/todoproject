// tab menu js
window.onload = function () {
    tabChecked();
}
let tab1 = document.querySelector('#tab-1'),
    tab2 = document.querySelector('#tab-2'),
    tabBlock1 = document.querySelector('.tasks-block'),
    tabBlock2 = document.querySelector('.category-block'),
    tabTitle1 = document.querySelector('.tab__title-1'),
    tabTitle2 = document.querySelector('.tab__title-2');

function tabChecked() {
    tabBlock1.style.display = "flex";
    tabBlock2.style.display = "none";
    tabTitle1.style.background = `#2196F3`
    tabTitle1.style.color = `#fff`
    tabTitle2.style.background = `#fff`
    tabTitle2.style.color = `#000`

}
tab1.addEventListener('change', tabChecked)
tab2.addEventListener('change', () => {
    tabBlock1.style.display = "none";
    tabTitle1.style.background = `#fff`
    tabTitle2.style.color = `#fff`
    tabTitle1.style.color = `#000`
    tabBlock2.style.display = "flex";
    tabTitle2.style.background = `#2196F3`

})

//adding note js

let dateInfo = document.querySelector('#date-1'),
    noteInfo = document.querySelector('#note-1'),
    checkbox = document.querySelector('#check-1'),
    btnAddNote = document.querySelector('.addNoteBtn'),
    tasksBlock = document.querySelector('.tasks-block'),
    taskCheckbox = document.querySelector('#check-1');

btnAddNote.addEventListener('click', () => {
    if (noteInfo.value != "" && dateInfo.value != "") {
        const taskItem =
            `
            <div class="task__item">
            <span class="task-condition"></span>
            <div class="task-name">${noteInfo.value}</div>
            <div class="task-date">${dateInfo.value}, 00:00:00</div>
            <button class="task-delete">Delete</button>
            <button class="task-edit">Edit</button>
            </div>
            `
        tasksBlock.insertAdjacentHTML('afterbegin', taskItem)
        

        let taskCond = document.querySelector('.task-condition');
        if (taskCheckbox.checked == true) {
            taskCond.style.background = `#ffa500`
        }
        taskCheckbox.checked=false;
    } else {
        alert('Заполните все поля!')
    }
})