



  let projectsList=[];
  
    export function addProject(name, createProject,  projectsList) {
      if (!name) {
            throw new Error('Project name is required');
        }
        const project = createProject(name);
        if (!project) {
            throw new Error('Failed to create project');
        }
        projectsList.push(project);
    }
  
    export function removeProjectFromList(nameProject, projectsList) {
        const projectIndex = projectsList.findIndex(element => element.name === nameProject);
        if (projectIndex === -1) {
            throw new Error(`Project with name ${nameProject} does not exist`);
        }
        projectsList.splice(projectIndex, 1);
    }
  
    function getProjectByName(projectName) {
      return projectsList.find((project) => project.name === projectName) || null;
    }
  
    function getProjects() {
        return projectsList.map(project => ({ ...project }));
    }
  
   
  
  
  
  