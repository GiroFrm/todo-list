
import { renderProjects, renderTodos } from '../domRenderer';
import appController from '../appController';
import { resetForm } from '../utils';
import createTodo from '../model/createTodo';

const projectNameInput = document.getElementById('projectNameInput');
const formAddProject = document.querySelector('.formAddProject');
const formTodoContainer = document.querySelector('.formTodoContainer');

export function handleProjectFormSubmit(event) {
    event.preventDefault();
    const projectName = projectNameInput.value;
    createNewProject(projectName);
    projectNameInput.value = "";
    formAddProject.style.display = "none";
    renderProjects();
}

function createNewProject(name) {
    appController.addNewProject(name);
    renderProjects();
}

export function handleProjectFormCancel() {
    projectNameInput.value = "";
    formAddProject.style.display = "none";
}

export function handleTaskSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const project = event.target.project.value;
    const description = event.target.description.value;
    const priority = event.target.priority.value;
    const dueDate = event.target.startdate.value;

    const todo = createTodo(title, description, priority, dueDate);
    appController.addTodoToProject(todo, project);
    renderTodos(project);
    this.style.display = 'none';
    resetForm(event.target);
    overlay.style.display = 'none';
}

export function handleEditFormSubmit(event, todoName, projectName) {
    const title = event.target.title.value;
    const project = event.target.project.value;
    const description = event.target.description.value;
    const priority = event.target.priority.value;
    const dueDate = event.target.startdate.value;

    const todoElement = appController.getTodoByProject(projectName, todoName);
    appController.removeTodoFromProject(projectName, todoElement);
    const todo = createTodo(title, description, priority, dueDate);
    appController.addTodoToProject(todo, project);
    formTodoContainer.innerHTML = '';
    event.target.style.display = 'none';

    resetForm(event.target);
    renderTodos(projectName);

}

export function addEditFormEventListeners(newFormEditTask, todoName, projectName, priority, dueDate) {
    const projectSelect = newFormEditTask.querySelector('#projectSelect');
    projectSelect.value = projectName;
    newFormEditTask.querySelector('#options').value = priority;
    newFormEditTask.querySelector('#start').value = dueDate;
    newFormEditTask.addEventListener("submit", (event) => {
        event.preventDefault();
        handleEditFormSubmit(event, todoName, projectName);
    });
}
