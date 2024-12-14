
import appController from "./appController";
import { setupTodosProject } from "./setupEventListeners";

import { createTodoElement } from "./todoElement";
import { setUpClickTrashIcon } from "./setupEventListeners";
import icontrash from './trash-50.png';

  export function renderProjects() {
       const ul = document.querySelector('.list-projects'); 
       ul.innerHTML= '';
        const listAllProjects = appController.getProjectsList();
          listAllProjects.forEach(element => {
           
            const li = document.createElement('li');
                li.classList.add('project-title-container');
            const newProject = document.createElement('a');
            const deleteIcon = document.createElement('img');
              deleteIcon.src=icontrash;
              deleteIcon.classList.add('icontrash');
              deleteIcon.addEventListener('click', ()=> setUpClickTrashIcon(element.name))
              newProject.href = '#';
              newProject.textContent = element.name;   
              li.classList.add('project1');
              li.setAttribute('tabindex', '0');
              li.appendChild(newProject); 
              li.appendChild(deleteIcon); 
              ul.appendChild(li);
                 setupTodosProject(); 
    });

  }

  export function renderTodos(projectName) {
    const projectSection = document.querySelector(".project-section");
    projectSection.innerHTML = " ";
    if(projectName== null){
    projectName = appController.getProjectsList()[0].name;
    console.log(projectName)
    }
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

    export function renderTitle(projectName){
      if(projectName== null){
        projectName = appController.getProjectsList()[0].name;
        }
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