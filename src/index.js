import { insert } from "./insertTask";
import { dialog } from "./dialog";
const addBtn=document.querySelector("#add");
insert();
addBtn.addEventListener('click',()=>{
    dialog();
})

