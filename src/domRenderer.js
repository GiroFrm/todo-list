
import appController from "./appController";

export const containerAddProject = document.querySelector('.formAddProject');
             
 export const btnProject = document.querySelector('.project-btn');
    btnProject.addEventListener('click',()=>{
        if (containerAddProject.style.display === 'none') {
            containerAddProject.style.display = 'block';
        } else {
            containerAddProject.style.display = 'none';
        }
    });


     document.getElementById('projectForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const projectName = document.getElementById('projectNameInput').value;
        createNewProject(projectName);
        document.getElementById('projectNameInput').value= '';
       
    };

    document.getElementById('cancelButton').onclick = function() {
        document.getElementById('projectNameInput').value = ''; // Clear the input field
        document.querySelector('.formAddProject').style.display = 'none'; // Hide the form
    };


    function createNewProject(name) {
        appController.addNewProject(name);
        // updateProjectsList
        renderProjects();
    }

  export   function renderProjects() {
        const projectsContainer =  document.querySelector('.projects-container');
        projectsContainer.innerHTML= ''
        const listAllProjects = appController.getProjectsList();
          listAllProjects.forEach(element => {
            const newProject = document.createElement('p');
                 newProject.innerHTML = element.name;
                 projectsContainer.appendChild(newProject);
    });

  }

  export function renderTodos() {
      const project = appController.getProjectsList().find(project=> project.name === 'Home1');
         project.getTodos().forEach(todo=>{
            console.log(todo);
            const todoContainer = document.createElement('div');
            todoContainer.classList.add('todo-container');
            const todoHeader = document.createElement('div');
            todoHeader.classList.add('todo-header');
            todoContainer.appendChild(todoHeader);
            const label = document.createElement('label');
            label.classList.add('container');
            todoHeader.appendChild(label);
            const titleTodo = document.createElement('p');
            titleTodo.innerHTML = todo.title;
            const input = document.createElement('input');
            input.type="checkbox";
            const span = document.createElement('span');
            span.classList.add('checkmark');
            label.appendChild(input);
            label.appendChild(span);
            label.appendChild(titleTodo);
            const edit = document.createElement('p');
            edit.innerHTML='edit';
            const cancel = document.createElement('p');
            cancel.innerHTML = 'cancel';
            cancel.classList.add('todo-delete');
            todoContainer.appendChild(edit);
            todoContainer.appendChild(cancel);
            
            document.querySelector('.project-section').appendChild(todoContainer);
            
         })
  }
    //  show todos linked to a project.
    /*
     * 1. find project byname in the projectList
     * 2. loop through all project todos
     * 
     * 3. create a new DOM element Div
     * 
     * 4. asign DOM Element div Todo properties
     * 5. Attach DOM Div Todo to container TOdos.
     * 
     *  <div class="todo-container"> 
            <div class="todo-header">
            <label class="container">
                <p>Todo1</p>
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
              </label>
            </div>
            <p>edit</p>
            <p class="todo-delete">delete</p>
        </div>
     */ 

    // add new Todo

    // assign todo to a different project.

