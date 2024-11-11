import { renderTodos } from "./domRenderer";


export function setupTodosProject(){
    const projectElements = document.querySelectorAll(".project1"); 

    projectElements.forEach(projectElement => {
        projectElement.removeEventListener("click", handleProjectClick); // removes existing so no double ups.
        projectElement.addEventListener("click", handleProjectClick);
       
    });
      
}

function handleProjectClick(event) {
    const projectElement = event.currentTarget;
    const projectName = projectElement.textContent;
    if(projectName) {
    renderTodos(projectName);
    console.log(projectName);
    }else {
        console.error("Project name not found.");
    }
}