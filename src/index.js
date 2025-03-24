import './style.css';
//  import './dialogbox.css';
import {renderProjects, renderTodos, renderTitle} from './domRenderer';
import {  setupAddProjectForm,  setupTodosProject, setUpAddTask } from './eventListeners/setupEventListeners';
import { navBar } from './components/navMenu/navMenu';


 window.onload = () => { // conditionally runs block on whether window is loaded - event listeners don't run until elements are on the page. (avoid timing conflicts).
     renderProjects();
     renderTodos();
     renderTitle();

     navBar();
     setupAddProjectForm();
     setupTodosProject();
     setUpAddTask();
  
   
    
}





