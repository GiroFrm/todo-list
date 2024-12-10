import './style.css';
import createTodo from './createTodo';
import createProject from './createProject';
import appController from './appController';
import {renderProjects, renderTodos} from './domRenderer';
import { setupTodosProject, setUpFormTodo, setupEventListeners,  setupAddProjectForm, setUpAddTask } from './setupEventListeners';
import { navBar } from './navMenu';




 window.onload = () => { // conditionally runs block on whether window is loaded - event listeners don't run until elements are on the page. (avoid timing conflicts).
    renderProjects();
    setupAddProjectForm();
     renderTodos();
     setupTodosProject();
     setUpAddTask();
     navBar();
}





