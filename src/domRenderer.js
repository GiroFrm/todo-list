
import appController from "./appController";
import { setupTodosProject } from "./setupEventListeners";

import { createTodoElement } from "./todoElement";


  export function renderProjects() {
        const projectsContainer =  document.querySelector('.project-container');
        
       const ul = document.querySelector('.list-projects'); 
       ul.innerHTML= '';
        const listAllProjects = appController.getProjectsList();
          listAllProjects.forEach(element => {
           
            const li = document.createElement('li');
            const newProject = document.createElement('a');
              newProject.href = '#';
              newProject.textContent = element.name;   
              li.classList.add('project1');
              li.setAttribute('tabindex', '0');
              li.appendChild(newProject);  
              ul.appendChild(li);
                 setupTodosProject(); 
    });

  }

  export function renderTodos(projectName = "Home1") {
    const projectSection = document.querySelector(".project-section");
    projectSection.innerHTML = " ";

    const project = appController
      .getProjectsList()
      .find((project) => project.name === projectName);

    project.getTodos().forEach((todo) => {
      const todoContainer = createTodoElement(todo, project);
      projectSection.appendChild(todoContainer);
    });
  }

   export function renderSelectProjects(formTask) {
    const projectsList = appController.getProjectsList();
    populateSelectedMenu(projectsList, formTask.querySelector("#projectSelect"))
  }
    export function renderSelectEditProjects() {
      const projectsList = appController.getProjectsList();
      populateSelectedMenu(projectsList, document.querySelector("#projectSelectEdit"))
    }
    
    export function renderDefaultTitle(projectName="Home1"){
     document.querySelector('.projectSectionTitle').innerHTML=projectName
    }
    
    function populateSelectedMenu(projectsList, selectMenu) {
       selectMenu.innerHTML = '';
        projectsList.forEach((project) => {
            const option = document.createElement("option");
            option.value = project.name;
            option.innerHTML = project.name;
            selectMenu.appendChild(option);
          });
     }