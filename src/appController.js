import createProject from "./createProject"
import createTodo from "./createTodo";


const appController = (()=> {

    let projectsList = [];

    let defaultProject = createProject("Home1");
        defaultProject.addTodo({title: 'cleaning kitchen'}); 
        defaultProject.addTodo({title: 'buy bread'}); 
        defaultProject.addTodo({title: 'change sheets'}); 
         projectsList.push(defaultProject);

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
    return projectsList.map(project => {
        return {
            name: project.name,
            addTodo: project.addTodo,
            removeTodo: project.removeTodo,
            getTodos: project.getTodos,
            todos: project.getTodos() // Include todos directly for easier access
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

    return {
        addNewProject,
        getProjectsList,
        addTodoToProject
    }
})();

export default appController;