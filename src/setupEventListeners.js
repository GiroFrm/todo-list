import appController from "./appController";
import createTodo from "./createTodo";
import { renderProjects, renderTodos } from "./domRenderer";


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

const newTaskForm =  document.querySelector('.formAddTodo'); //html template

const cancelBtnTaskFrom = document.querySelector('#cancelButtonTodo');

document.querySelector('.btn-addtask').addEventListener("click",()=>{

    newTaskForm.style.display='block';
  // document.querySelector('.addTaskform').reset()
 console.log("Add Task")
})

cancelBtnTaskFrom.addEventListener('click', ()=>{
    newTaskForm.style.display='none';
})

 

 export function setUpFormTodo() {
    // get form from HTML
    
    const formSubmitTask = document.querySelector('.addTaskform');

    
       formSubmitTask.addEventListener("submit", (event)=>{
        event.preventDefault(); 
        
        const title = event.target.title.value;
        const project = event.target.project.value;
        const description = event.target.description.value;
        // const priority = event.target.priority.value;
        // const dueDate = event.target.dueDate.value;

             const todo = createTodo(title, description);
             appController.addTodoToProject(todo, project);
         
        renderTodos(); 
        
        newTaskForm.style.display='none';
        event.target.title= '';
      
       })
      

 }

 export function setUpEditForm(todoName) {
    document.querySelector('#editFormTodo').style.display="block";

    const formEditTask = document.querySelector('#editTaskform');


    const newFormEditTask = formEditTask.cloneNode(true); 
    formEditTask.parentNode.replaceChild(newFormEditTask, formEditTask);
     const cancelButton = document.querySelector('#cancelButtonTodoEdit');
      cancelButton.addEventListener('click', ()=>{
        newFormEditTask.style.display="none";
     })
    newFormEditTask.addEventListener("submit", (event)=>{
        event.preventDefault(); 
        
        const title = event.target.title.value;
        const project = event.target.project.value;
        const description = event.target.description.value;
        // const priority = event.target.priority.value;
        // const dueDate = event.target.dueDate.value;
         
        const projectsExists = appController.getProjectsList();
        const projectElement = projectsExists.find(el => el.name === 'Home1');
        const todoElement =  projectElement.getTodos().find(todo => todo.title === todoName);
 
        todoElement.editTodo(title);       
        newFormEditTask.style.display='none';
        event.target.title= '';

        renderTodos();

       
      
       })

 }