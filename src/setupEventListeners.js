import appController from "./appController";
import createTodo from "./createTodo";
import { createFormTodoElement } from "./formTodoElement";
import { renderProjects, renderTodos, renderSelectProjects,renderTitle ,renderSelectEditProjects } from "./domRenderer";
import { resetForm } from './utils';
import { createDialog } from "./dialogWindow";


export function setupTodosProject(){
    const projectElements = document.querySelectorAll(".project1"); 
    projectElements.forEach(projectElement => {
        projectElement.removeEventListener("click", handleProjectClick); // removes existing so no double ups.
        projectElement.addEventListener("click", handleProjectClick);
       
    });
   
}

export function setupAddProjectForm() {
    const btnProjects = document.querySelectorAll(".project-btn");
    btnProjects.forEach(btnProject => { btnProject.addEventListener("click", toggleProjectForm)});
    document.getElementById("projectForm").onsubmit = handleProjectFormSubmit;
    document.getElementById("cancelButton").onclick = handleProjectFormCancel;
  }

  function toggleProjectForm() {
    const containerAddProject = document.querySelector(".formAddProject");
    containerAddProject.style.display = containerAddProject.style.display === "none" ? "block" : "none";
  }

  function handleProjectFormSubmit(event) {
    event.preventDefault();
    const projectName = document.getElementById("projectNameInput").value;
    createNewProject(projectName);
    document.getElementById("projectNameInput").value = "";
    document.querySelector(".formAddProject").style.display = "none";
  }

  function handleProjectFormCancel() {
    document.getElementById("projectNameInput").value = "";
    document.querySelector(".formAddProject").style.display = "none";
  }

  function createNewProject(name) {
    appController.addNewProject(name);
    renderProjects();
}

function handleProjectClick(event) {
    const projectElement = event.currentTarget;
    const projectName = projectElement.textContent;
    if(projectName) {
    renderTodos(projectName);
    document.querySelector('.projectSectionTitle').innerHTML= projectName;
    console.log(projectName)
    }else {
        console.error("Project name not found.");
    }
}

export function setUpAddTask() {
    const overlay = document.getElementById('overlay');
 const addTasksbtn = document.querySelectorAll('.btn-addtask');
 addTasksbtn.forEach(addTaskbtn=>{
    addTaskbtn.addEventListener("click",()=>{
     document.querySelector('.formTodoContainer').innerHTML=''; 
    let  existingForm  = document.querySelector('.formAddTodo');     
    if (!existingForm) {
         setUpFormTodo(); 
         existingForm = document.querySelector('.formAddTodo');
         existingForm.style.display = 'none';
         overlay.style.display = 'block';
        }
         existingForm.style.display = existingForm.style.display === 'none' ? 'block' : 'none';
         renderSelectProjects(existingForm);
    
}) 
 })
}

window.addEventListener('click', (event) => {
     if (event.target == overlay) { 
        overlay.style.display = 'none';
        const formContainer = document.querySelector('.formTodoContainer');
        formContainer.innerHTML=''
} 
});

 export function setUpFormTodo() {
    const overlay = document.getElementById('overlay');
    const formContainer = document.querySelector('.formTodoContainer');
    formContainer.innerHTML='';
    const formSubmitTask = createFormTodoElement();
    formContainer.appendChild(formSubmitTask);
    formSubmitTask.addEventListener("submit", handleTaskSubmit);
    const btnCancel =  formSubmitTask.querySelector('#buttonCancel1');

    btnCancel.addEventListener("click", ()=>{
        overlay.style.display = 'none';
    });
   
 }

 function handleTaskSubmit(event) {
    event.preventDefault(); 
    const overlay = document.getElementById('overlay');
    const title = event.target.title.value;
    const project = event.target.project.value;
    const description = event.target.description.value;
    const priority = event.target.priority.value;
    const dueDate = event.target.startdate.value;

    const todo = createTodo(title, description,priority, dueDate);
    appController.addTodoToProject(todo, project);
    renderTodos(project); 
    this.style.display='none';
    resetForm(event.target);
    overlay.style.display = 'none';
 }

 export function setUpEditForm(formTask,todoName, projectName, priority, dueDate) {
    renderSelectProjects(formTask);
    addEditFormEventListeners(formTask, todoName, projectName, priority, dueDate);
 }

 export function setUpClickTrashIcon(name){
    createDialog(name);
 }

 export function setUpRemoveProject(name){
    appController.removeProject(name);
    renderProjects();
    renderTodos();
    renderTitle();
 }

 function addEditFormEventListeners(newFormEditTask, todoName, projectName, priority, dueDate) { 
   
    const projectSelect = newFormEditTask.querySelector('#projectSelect');
    projectSelect.value = projectName; 
    newFormEditTask.querySelector('#options').value = priority; 
    newFormEditTask.querySelector('#start').value = dueDate; 
    newFormEditTask.addEventListener("submit", (event) => {  
        event.preventDefault(); 
        handleEditFormSubmit(event, todoName, projectName); 
    }); 
}

function handleEditFormSubmit(event, todoName, projectName) { 
    const formTodocontainer = document.querySelector('.formTodoContainer');
    const title = event.target.title.value; 
    const project = event.target.project.value; 
    const description = event.target.description.value; 
    const priority = event.target.priority.value; 
    const dueDate = event.target.startdate.value; 
    
    const todoElement = appController.getTodoByProject(projectName, todoName);
    appController.removeTodoFromProject(projectName, todoElement);
    const todo = createTodo(title, description,priority, dueDate);
    appController.addTodoToProject(todo, project);
    formTodocontainer.innerHTML='';
    event.target.style.display  = 'none';
   
    resetForm(event.target);
    renderTodos(projectName);
 }
