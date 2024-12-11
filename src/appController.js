

import createProject from "./createProject"
import createTodo from "./createTodo";


const appController = (()=> {

    let projectsList = [];

    let defaultProject = createProject("Home1");
    const todo0 = createTodo('cleaning kitchen');
        defaultProject.addTodo(todo0); 
        const todoBread = createTodo("buy bread")
        defaultProject.addTodo( todoBread); 
        const todo2 = createTodo('change sheets') 
        defaultProject.addTodo(todo2); 
         projectsList.push(defaultProject);

    let project2 =createProject("webdevelopment");
    const todop = createTodo('test case')
    const todop1 = createTodo('meting Call')
    const todop2 = createTodo('Git Hub')
        project2.addTodo(todop); 
        project2.addTodo(todop1); 
        project2.addTodo(todop2); 
     projectsList.push(project2);    

    function addProjectToList(name, createProject) {
        if (!name) {
            throw new Error('Project name is required');
        }
    
        const project = createProject(name);
        if (!project) {
            throw new Error('Failed to create project');
        }
    
        projectsList.push(project);
    }

    function removeProjectFromList() {
        //will remove project from list and all of its todos?
        //
    }

    function addNewProject(name) {
         return addProjectToList(name, createProject)   
    }
    
   function getProjectsList() {
    return projectsList.map(project => {
        return {
            name: project.name,
            addTodo: project.addTodo,
            removeTodo: project.removeTodo,
            getTodos: project.getTodos,
           
        };
    });
   }

    function addTodoToProject(todo, nameProject) {
        const project = projectsList.find(element => element.name === nameProject);
        if (!project) {
            throw new Error(`Project with name ${projectName} does not exist`);
        }
            project.addTodo(todo)
        return project;
    }

    function removeProject(nameProject) {
        const projectIndex = projectsList.findIndex(element => element.name === nameProject);
        if (projectIndex === -1) {
            throw new Error(`Project with name ${nameProject} does not exist`);
        }
        projectsList.splice(projectIndex, 1);
        return projectsList;
    }
    
    function getTodoByProject(projectName, todoName) { 
        const projects = this.getProjectsList(); 
        const project = projects.find(el => el.name === projectName);
         if (project) {
             return project.getTodos().find(todo => todo.title === todoName); 
            } 
             return null; 
            }

    return {
        addNewProject,
        getProjectsList,
        addTodoToProject,
        getTodoByProject,
        removeProject
    }
})();

export default appController;