

import createProject from "./model/createProject"
import createTodo from "./model/createTodo";
import{addProject, removeProjectFromList} from './model/projectManager';
import {  addTodoToProjectManager as addTodoToProjectHelper, removeTodoFromProjectManager as removeTodoHelper, getTodoByProjectManager as getTodoHelper } from "./model/todoManager";
const appController = (() => {

    let projectsList = [];

function initializeDefaultData(){
    let defaultProject = createProject("Home1");

    const todo0 = createTodo("cleaning kitchen");
    todo0.dueDate = "2024-12-14";
    defaultProject.addTodo(todo0);

    const todoBread = createTodo("buy bread");
    todoBread.dueDate = "2024-12-18";
    defaultProject.addTodo(todoBread);

    const todo2 = createTodo("change sheets");
    todo2.dueDate = "2024-12-22";
    defaultProject.addTodo(todo2);

    projectsList.push(defaultProject);

    let project2 = createProject("webdevelopment");
    const todop = createTodo('test case')
    const todop1 = createTodo('meting Call')
    const todop2 = createTodo('Git Hub')
    project2.addTodo(todop);
    project2.addTodo(todop1);
    project2.addTodo(todop2);
    projectsList.push(project2);
}

    function findProjectByName(name) {
        return projectsList.find(project => project.name === name) || null;
      }

    function addProjectToList(name) {
        addProject(name, createProject, projectsList);
    }

    function addNewProject(name) {
        return addProjectToList(name)
    }

    function getProjectsList() {
        return projectsList.map(project => {
            return {
                name: project.name,
                addTodo: project.addTodo,
                removeTodo: project.removeTodo,
                getTodos: project.getTodos,
            }
        });
    }

    function removeProject(nameProject) {
       removeProjectFromList(nameProject, projectsList);
     
    }

    function addTodoToProject(todo, nameProject) {
        const project = findProjectByName(nameProject);
        return addTodoToProjectHelper(todo, project)
    }

    function removeTodoFromProject(projectName, todo) {
        const project = findProjectByName(projectName);
        removeTodoHelper(project, todo)
    }

    function getTodoByProject(projectName, todoName) {
        const project = findProjectByName(projectName);
       return getTodoHelper(project, todoName);
    }

    initializeDefaultData();
    return {
        addNewProject,
        getProjectsList,
        addTodoToProject,
        getTodoByProject,
        removeProject,
        removeTodoFromProject
    }
})();

export default appController;