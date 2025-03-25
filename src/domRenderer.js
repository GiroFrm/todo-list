
import appController from "./appController";
import { renderProjectsView } from "./view/projectView.js"
import { renderTodosView } from "./view/todoView.js";
import { populateSelectedMenu } from "./view/menuView.js";



   function renderProjects() {
    return renderProjectsView();
  }

  function renderTodos(projectName) {
    return renderTodosView(projectName);
  }

  function renderSelectProjects(formTask) {
    const projectsList = appController.getProjectsList();
    populateSelectedMenu(projectsList, formTask.querySelector("#projectSelect"))
  }

   function renderSelectEditProjects() {
      const projectsList = appController.getProjectsList();
      populateSelectedMenu(projectsList, document.querySelector("#projectSelectEdit"))
    }
    
    function renderTitle(projectName){
      if(projectName== null){
        projectName = appController.getProjectsList()[0].name;
        }
        document.querySelector('.projectSectionTitle').innerHTML=projectName
    }

    export{
      renderProjects,
      renderTodos,
      renderSelectProjects,
      renderSelectEditProjects,
      renderTitle
    }

   
    
    


    