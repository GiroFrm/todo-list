
import appController from "./appController";

export const containerAddProject = document.querySelector('.formAddProject');
             
 export const btnProject = document.querySelector('.project-btn');
    btnProject.addEventListener('click',()=>{
        if (containerAddProject.style.display === 'none') {
            containerAddProject.style.display = 'block';
        } else {
            containerAddProject.style.display = 'none';
        }
    });


     document.getElementById('projectForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const projectName = document.getElementById('projectNameInput').value;
        createNewProject(projectName);
        document.getElementById('projectNameInput').value= '';
       
    };

    document.getElementById('cancelButton').onclick = function() {
        document.getElementById('projectNameInput').value = ''; // Clear the input field
        document.querySelector('.formAddProject').style.display = 'none'; // Hide the form
    };


    function createNewProject(name) {
        appController.addNewProject(name);
        // updateProjectsList
        renderProjects();
    }

    function renderProjects() {
        const projectsContainer =  document.querySelector('.projects-container');
        projectsContainer.innerHTML= ''
        const listAllProjects = appController.getProjectsList();
          listAllProjects.forEach(element => {
            const newProject = document.createElement('p');
                 newProject.innerHTML = element.name;
                 projectsContainer.appendChild(newProject);
    });
}


    