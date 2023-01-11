import { taskCheckbox } from "../vars.js";
import { alertInfo } from "./alertInfo.js";
function check() {
    taskCheckbox.addEventListener('change',()=>{
        if(taskCheckbox.checked){
            let msg = document.querySelector(".msg") ?? 0;
            msg.textContent = "Important";
            alertInfo()
        }
        else{
             let msg = document.querySelector(".msg") ?? 0;
            msg.textContent = "Usual";
            alertInfo();
        } 
    })
 }

 export {check}