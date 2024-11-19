
import appController from "./appController";
import { setUpEditForm, setupTodosProject } from "./setupEventListeners";
import { format, parseISO } from 'date-fns';
import { createTodoElement } from "./todoElement";

// export const containerAddProject = document.querySelector('.formAddProject');           
//  export const btnProject = document.querySelector('.project-btn');
 
//     btnProject.addEventListener('click',()=>{
//         if (containerAddProject.style.display === 'none') {
//             containerAddProject.style.display = 'block';
//         } else {
//             containerAddProject.style.display = 'none';
//         }
//     });


//      document.getElementById('projectForm').onsubmit = function(event) {
//         event.preventDefault(); // Prevent the form from submitting the traditional way
//         const projectName = document.getElementById('projectNameInput').value;
//        createNewProject(projectName);
       
//         document.getElementById('projectNameInput').value= '';
       
//     };

//     document.getElementById('cancelButton').onclick = function() {
//         document.getElementById('projectNameInput').value = ''; // Clear the input field
//         document.querySelector('.formAddProject').style.display = 'none'; // Hide the form
//     };

   
   
    // function createNewProject(name) {
    //     appController.addNewProject(name);
    //     // updateProjectsList
    //     renderProjects();
    // }

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

  
   export function renderSelectProjects() {
     const projectsList = appController.getProjectsList();
     populateSelectedMenu(projectsList, document.querySelector("#projectSelect"))
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