
export function populateSelectedMenu(projectsList, selectMenu) {
    selectMenu.innerHTML = '';
     projectsList.forEach((project) => {
         const option = document.createElement("option");
         option.value = project.name;
         option.innerHTML = project.name;
         selectMenu.appendChild(option);
       });
  }