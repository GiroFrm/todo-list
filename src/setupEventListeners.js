import appController from "./appController";
import createTodo from "./createTodo";
import { renderProjects, renderTodos, renderSelectProjects,  renderSelectEditProjects } from "./domRenderer";
import { resetForm } from './utils';

export function setupTodosProject(){
    const projectElements = document.querySelectorAll(".project1"); 
    projectElements.forEach(projectElement => {
        projectElement.removeEventListener("click", handleProjectClick); // removes existing so no double ups.
        projectElement.addEventListener("click", handleProjectClick);
       
    });
      
}
export function setupAddProjectForm() {
    const btnProject = document.querySelector(".project-btn");
    btnProject.addEventListener("click", toggleProjectForm);
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
    // updateProjectsList
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

const newTaskForm =  document.querySelector('.formAddTodo'); //html template
const cancelBtnTaskFrom = document.querySelector('#cancelButtonTodo');

document.querySelector('.btn-addtask').addEventListener("click",()=>{
    newTaskForm.style.display='block';
    renderSelectProjects();
 
})

cancelBtnTaskFrom.addEventListener('click', ()=>{
    newTaskForm.style.display='none';
})


 export function setUpFormTodo() {
   
    const formSubmitTask = document.querySelector('.addTaskform');
    formSubmitTask.addEventListener("submit", handleTaskSubmit);
    
 }

 function handleTaskSubmit(event) {
    event.preventDefault(); 
        
    const title = event.target.title.value;
    const project = event.target.project.value;
    const description = event.target.description.value;
    const priority = event.target.priority.value;
    const dueDate = event.target.startdate.value;

    const todo = createTodo(title, description,priority, dueDate);
    appController.addTodoToProject(todo, project);

    renderTodos(project); 
   newTaskForm.style.display='none';
   resetForm(event.target);
 }


 export function setUpEditForm(todoName, projectName, priority, dueDate) {
    const editFormTodo = document.querySelector('#editFormTodo'); editFormTodo.style.display = "block";
    renderSelectEditProjects();
    
    const formEditTask = document.querySelector('.addEditTaskform');
    const newFormEditTask = formEditTask.cloneNode(true); 
    formEditTask.parentNode.replaceChild(newFormEditTask, formEditTask);
    
    addEditFormEventListeners(newFormEditTask, todoName, projectName, priority, dueDate);
 
 }


 function addEditFormEventListeners(newFormEditTask, todoName, projectName, priority, dueDate) { 
    const cancelButton = document.querySelector('#cancelButtonTodoEdit');
    cancelButton.addEventListener('click', () => { 
        newFormEditTask.style.display = "none"; 
    }); 
    const projectSelect = document.getElementById('projectSelectEdit');
    projectSelect.value = projectName; 

    document.getElementById('optionsEdit').value = priority; 
    document.getElementById('startEdit').value = dueDate; 

    newFormEditTask.addEventListener("submit", (event) => {  
        event.preventDefault(); 
        handleEditFormSubmit(event, todoName); 
    }); 
}

function handleEditFormSubmit(event, todoName) { 
    const title = event.target.title.value; 
    const project = event.target.project.value; 
    const description = event.target.description.value; 
    const priority = event.target.priority.value; 
    const startDate = event.target.startdate.value; 

    const todoElement = appController.getTodoByProject(project, todoName);

    todoElement.editTodo(title, description, priority, startDate); 
    event.target.style.display  = 'none';
    resetForm(event.target);
    renderTodos(project);
 }
