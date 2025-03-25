import appController from "../appController";
import { setupTodosProject, setUpClickTrashIcon } from "../eventListeners/setupEventListeners";
import icontrash from '../trash-50.png';

 export function renderProjectsView() {
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