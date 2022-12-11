window.onload = function (){
    clearLocalstorage();
}
let dateInfo = document.querySelector('#date-1'),
    noteInfo = document.querySelector('#note-1'),
    btnAddNote = document.querySelector('.addNoteBtn'),
    taskCheckbox = document.querySelector('#check-1'),
    notes = [],
    data = {},
    id = 0,
    index = 1;


function addLocalStorage() {
    btnAddNote.addEventListener('click', () => {
        debugger

        if (noteInfo.value != "" && dateInfo.value != "") {
            if (notes.length == 0) {
                data.id = id;
                data.target = noteInfo.value;
                data.date = dateInfo.value;
                data.importance = taskCheckbox.checked;
                data.done = false;
                notes.push(data);
                id++;
            } else {
                notes.push({});
                notes[index].id = id;
                notes[index].target = noteInfo.value;
                notes[index].date = dateInfo.value;
                notes[index].importance = taskCheckbox.checked;
                notes[index].done = false;
                index++;
                id++;
            }

        }
        localStorage.setItem('notes', JSON.stringify(notes));
    })
}
function clearLocalstorage(){
    localStorage.clear();
}
export {
    addLocalStorage
}