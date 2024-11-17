import appController from "./appController";
import createTodo from "./createTodo";
import { renderProjects, renderTodos, renderSelectProjects,  renderSelectEditProjects } from "./domRenderer";
import { format, parseISO } from 'date-fns';

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
    // get form from HTML
    
    const formSubmitTask = document.querySelector('.addTaskform');

    
       formSubmitTask.addEventListener("submit", (event)=>{
        event.preventDefault(); 
        
         const title = event.target.title.value;
         const project = event.target.project.value;
         const description = event.target.description.value;
         const priority = event.target.priority.value;
         const dueDate = event.target.startdate.value;

             const todo = createTodo(title, description,priority, dueDate);
           
            const dateString =dueDate;
          
             const date = parseISO(dateString); 
             const dayNumber = format(date, 'd');
             const abbreviatedMonthName = format(date, 'MMM');
             console.log(`${abbreviatedMonthName} ${dayNumber}`)

             appController.addTodoToProject(todo, project);
         
        renderTodos(project); 

        newTaskForm.style.display='none';
        event.target.title= '';
      
       })
 }

 export function setUpEditForm(todoName, projectName, priority, dueDate) {
    document.querySelector('#editFormTodo').style.display="block";
    renderSelectEditProjects() 
    const formEditTask = document.querySelector('.addEditTaskform');

    const newFormEditTask = formEditTask.cloneNode(true); 
        formEditTask.parentNode.replaceChild(newFormEditTask, formEditTask);

     const cancelButton = document.querySelector('#cancelButtonTodoEdit');
        cancelButton.addEventListener('click', ()=>{
        newFormEditTask.style.display="none";
     })
     
     const projectSelect = document.getElementById('projectSelectEdit');      
         projectSelect.value = projectName;

         document.getElementById('optionsEdit').value = priority; 

        document.getElementById('startEdit').value = dueDate

        newFormEditTask.addEventListener("submit", (event)=>{
            event.preventDefault(); 
        
            const title = event.target.title.value;
            const project = event.target.project.value;
            const description = event.target.description.value;
            const priority = event.target.priority.value;
            const startDate = event.target.startdate.value;
         
            const projectsExists = appController.getProjectsList();
            const projectElement = projectsExists.find(el => el.name === project);
            const todoElement =  projectElement.getTodos().find(todo => todo.title === todoName);
 
            
        todoElement.editTodo(title,description, priority, startDate);       
        newFormEditTask.style.display='none';
        event.target.title= '';
        renderTodos(project);

       
      
       })

 }