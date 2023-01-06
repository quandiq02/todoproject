import { tabChecked, tabSettings } from './modules/tabs.js';
import {addLocalStorage} from './modules/addLocalStorage.js'
import { addNote } from './modules/addNote.js';
import { searchNote } from './modules/searchNote.js';
import { saveNote } from './modules/saveNote.js'

tabChecked();
tabSettings();
addLocalStorage();
addNote();
searchNote();
saveNote();
