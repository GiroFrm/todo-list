import appController from "../appController";
import { createTodoElement } from "../components/todoElement/todoElement";

export function renderTodosView(projectName) {
    const projectSection = document.querySelector(".project-section");
    projectSection.innerHTML = " ";
    if(projectName== null){
    projectName = appController.getProjectsList()[0].name;
    console.log(projectName)
    }
    const project = appController
      .getProjectsList()
      .find((project) => project.name === projectName);

    project.getTodos().forEach((todo) => {
      const todoContainer = createTodoElement(todo, project);
      projectSection.appendChild(todoContainer);
    });
  }