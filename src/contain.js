import "./style.css";
import "./contain.css"
export function contain(){
    const container=document.querySelector("#container");
    const contain=document.querySelector("#contain");
    contain.textContent="Je suis le container";
    container.appendChild(contain);
    
}