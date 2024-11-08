import createProject from "./createProject"


const appController = (()=> {

    let projectsList = []

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

    function addNewProject(name) {
         return addProjectToList(name, createProject)   
    }
    
   function getProjectsList() {
        return JSON.parse(JSON.stringify(projectsList))
    }

    function addTodoToProject(todo, nameProject) {
       
        const project = projectsList.find(element => element.name === nameProject);

        if (!project) {
            throw new Error(`Project with name ${projectName} does not exist`);
        }
            project.addTodo(todo)
        return project;
    }

    return {
        addNewProject,
        getProjectsList,
        addTodoToProject
    }
})();

export default appController;