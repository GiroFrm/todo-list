import appController from "../appController";
import { createFormTodoElement } from "../components/formTodoElements/formTodoElement";
import { renderProjects, renderTodos, renderSelectProjects, renderTitle} from "../domRenderer";
import { createDialog } from "../components/dialogWindow/dialogWindow";
import { handleProjectFormSubmit, handleProjectFormCancel, handleTaskSubmit, addEditFormEventListeners } from "./formHandlers";
import { toggleForm } from '../helpers/uiHelpers.js'

const formTodoContainer = document.querySelector('.formTodoContainer');
const overlay = document.getElementById('overlay');
const projectForm = document.getElementById("projectForm");
const cancelButton = document.getElementById("cancelButton");
const addTasksbtn = document.querySelectorAll('.btn-addtask');



 function setupTodosProject() {
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

 function setupAddProjectForm() {
   const btnProjects = document.querySelectorAll(".project-btn");
   const container = document.querySelector(".formAddProject");
   btnProjects.forEach(btnProject => { 
      btnProject.addEventListener("click", ()=>{
      toggleForm(container);
      }) 
   }
);
   projectForm.onsubmit = handleProjectFormSubmit;
   cancelButton.onclick = handleProjectFormCancel;
}

function setUpRemoveProject(name) {
   appController.removeProject(name);
   renderProjects();
   renderTodos();
   renderTitle();
}

 function setUpAddTask() {
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
         toggleForm(existingForm);
         renderSelectProjects(existingForm);

      })
   })
}


window.addEventListener('click', (event) => {
   if (event.target == overlay) {
      overlay.style.display = 'none';
      //toggleForm(formTodoContainer);
      formTodoContainer.innerHTML = ''
   }
});

 function setUpFormTodo() {
   formTodoContainer.innerHTML = '';
   const formSubmitTask = createFormTodoElement();
   formTodoContainer.appendChild(formSubmitTask);
   formSubmitTask.addEventListener("submit", handleTaskSubmit);
   const btnCancel = formSubmitTask.querySelector('#buttonCancel1');
   btnCancel.addEventListener("click", () => {
      overlay.style.display = 'none';
   });

}

 function setUpEditForm(formTask, todoName, projectName, priority, dueDate) {
   renderSelectProjects(formTask);
   addEditFormEventListeners(formTask, todoName, projectName, priority, dueDate);
}

function setUpClickTrashIcon(name) {
   createDialog(name);
}




export{
   setupTodosProject,
   setupAddProjectForm, 
   setUpAddTask, 
   setUpFormTodo, 
   setUpEditForm,
   setUpClickTrashIcon,
   setUpRemoveProject
}