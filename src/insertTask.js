import { task } from "./showTask";
import "./style.css";
import "./allTask.css"
export function insert(){
    const contain=document.querySelector("#contain");
    const title=document.createElement("p");
    title.setAttribute('id','title');
    title.textContent=task.title;
    const descrip=document.createElement("p");
    descrip.setAttribute('id','descrip');
    descrip.textContent=task.description;
    const date=document.createElement("p");
    date.setAttribute('id','date');
    date.textContent=task.dueDate;
    const priority=document.createElement("p");
    priority.setAttribute('id','priority');
    priority.textContent=task.priority;
    const div=document.createElement("div");
    div.setAttribute('class', 'task');
    div.append(title, descrip,date,priority);
    contain.appendChild(div);


}