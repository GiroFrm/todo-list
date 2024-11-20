
import appController from "./appController";
import { setupTodosProject } from "./setupEventListeners";

import { createTodoElement } from "./todoElement";


  export function renderProjects() {
        const projectsContainer =  document.querySelector('.projects-container');
        projectsContainer.innerHTML= ''
        const listAllProjects = appController.getProjectsList();
          listAllProjects.forEach(element => {
            const newProject = document.createElement('p');
                 newProject.classList.add('project1');
                 newProject.innerHTML = element.name;
               
                 projectsContainer.appendChild(newProject);
                 //add click event to rendered new projects
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
    
     function populateSelectedMenu(projectsList, selectMenu) {
       selectMenu.innerHTML = '';
        projectsList.forEach((project) => {
            const option = document.createElement("option");
            option.value = project.name;
            option.innerHTML = project.name;
            selectMenu.appendChild(option);
          });
     }