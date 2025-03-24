
import appController from "./appController";
import { renderProjectsView } from "./view/projectView.js"
import { renderTodosView } from "./view/todoView.js";
import { populateSelectedMenu } from "./view/menuView.js";



 export  function renderProjects() {
    return renderProjectsView();
  }

 export function renderTodos(projectName) {
    return renderTodosView(projectName);
  }

  export  function renderSelectProjects(formTask) {
    const projectsList = appController.getProjectsList();
    populateSelectedMenu(projectsList, formTask.querySelector("#projectSelect"))
  }

  export function renderSelectEditProjects() {
      const projectsList = appController.getProjectsList();
      populateSelectedMenu(projectsList, document.querySelector("#projectSelectEdit"))
    }

   export  function renderTitle(projectName){
      if(projectName== null){
        projectName = appController.getProjectsList()[0].name;
        }
        document.querySelector('.projectSectionTitle').innerHTML=projectName
    }

   
    
    


    