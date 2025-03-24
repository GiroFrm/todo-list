import appController from "../appController";
import { createFormTodoElement } from "../components/formTodoElements/formTodoElement";
import { renderProjects, renderTodos, renderSelectProjects, renderTitle} from "../domRenderer";
import { createDialog } from "../components/dialogWindow/dialogWindow";
import { handleProjectFormSubmit, handleProjectFormCancel, handleTaskSubmit, addEditFormEventListeners } from "./formHandlers";


const formTodoContainer = document.querySelector('.formTodoContainer');
const overlay = document.getElementById('overlay');
const projectForm = document.getElementById("projectForm");
const cancelButton = document.getElementById("cancelButton");
const addTasksbtn = document.querySelectorAll('.btn-addtask');

export function setupTodosProject() {
   const projectElements = document.querySelectorAll(".project1");
   projectElements.forEach(projectElement => {
      projectElement.removeEventListener("click", handleProjectClick); // removes existing so no double ups.
      projectElement.addEventListener("click", handleProjectClick);

   });

}
function handleProjectClick(event) {
   const projectElement = event.currentTarget;
   const projectName = projectElement.textContent;
   if (projectName) {
      renderTodos(projectName);
      renderTitle(projectName)
   } else {
      console.error("Project name not found.");
   }
}

export function setupAddProjectForm() {
   const btnProjects = document.querySelectorAll(".project-btn");
   btnProjects.forEach(btnProject => { btnProject.addEventListener("click", toggleProjectForm) });
   projectForm.onsubmit = handleProjectFormSubmit;
   cancelButton.onclick = handleProjectFormCancel;
}


export function setUpAddTask() {
   addTasksbtn.forEach(addTaskbtn => {
      addTaskbtn.addEventListener("click", () => {
         formTodoContainer.innerHTML = '';
         let existingForm = document.querySelector('.formAddTodo');
         if (!existingForm) {
            setUpFormTodo();
            existingForm = document.querySelector('.formAddTodo');
            existingForm.style.display = 'none';
            overlay.style.display = 'block';
         }
         toggleVisibility(existingForm)
         renderSelectProjects(existingForm);

      })
   })
}

function toggleProjectForm() {
   const containerAddProject = document.querySelector(".formAddProject");
   containerAddProject.style.display = containerAddProject.style.display === "none" ? "block" : "none";
}

function toggleVisibility(element) {
   element.style.display = element.style.display === "none" ? "block" : "none";
}

window.addEventListener('click', (event) => {
   if (event.target == overlay) {
      overlay.style.display = 'none';
      formTodoContainer.innerHTML = ''
   }
});


export function setUpFormTodo() {
   formTodoContainer.innerHTML = '';
   const formSubmitTask = createFormTodoElement();
   formTodoContainer.appendChild(formSubmitTask);
   formSubmitTask.addEventListener("submit", handleTaskSubmit);
   const btnCancel = formSubmitTask.querySelector('#buttonCancel1');
   btnCancel.addEventListener("click", () => {
      overlay.style.display = 'none';
   });

}

export function setUpEditForm(formTask, todoName, projectName, priority, dueDate) {
   renderSelectProjects(formTask);
   addEditFormEventListeners(formTask, todoName, projectName, priority, dueDate);
}

export function setUpClickTrashIcon(name) {
   createDialog(name);
}

export function setUpRemoveProject(name) {
   appController.removeProject(name);
   renderProjects();
   renderTodos();
   renderTitle();
}

