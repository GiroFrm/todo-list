//Create a form to add new Todo
export function createFormTodoElement() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('formAddTodo');
    const formTodo = document.createElement('form');
    formTodo.classList.add('addTaskform');
    formContainer.appendChild(formTodo);
    const input = document.createElement('input');
    input.type='text';
    input.id = 'titleInput';
    input.name = 'title';
    input.placeholder = 'Task Name';
    input.required = true;
    formTodo.appendChild(input);

    const textArea = document.createElement('textarea');
    textArea.name = 'description';
    textArea.id = 'descriptionInput';
    textArea.rows = '4';
    textArea.placeholder = 'Description';
    formTodo.appendChild(textArea);

    const optionMenuContainer = document.createElement('div');
    const labelOptions = document.createElement('label');
    labelOptions.for ='options';
    labelOptions.innerHTML = 'priority:';
    optionMenuContainer.appendChild(labelOptions);
    const selectMenu = document.createElement('select');
    selectMenu.id= 'options';
    selectMenu.name = 'priority';
    optionMenuContainer.appendChild(selectMenu);
    formTodo.appendChild(optionMenuContainer);
    const priority1 = document.createElement('option');
    priority1.value = 'option1';
    priority1.innerHTML='priority1'
    const priority2 = document.createElement('option');
    priority2.value = 'option2';
    priority2.innerHTML='priority2'
    const priority3 = document.createElement('option');
    priority3.value = 'option3';
    priority3.innerHTML='priority3';
    selectMenu.appendChild(priority1);
    selectMenu.appendChild(priority2);
    selectMenu.appendChild(priority3);
    
    const containerInputDate = document.createElement('div');
    const labelDate = document.createElement('label');
    containerInputDate.appendChild(labelDate); 
    formTodo.appendChild(containerInputDate);
    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.id='start';
    inputDate.name = 'startdate';
    containerInputDate.appendChild(inputDate);

    const optionProjectsMenuContainer = document.createElement('div')
    formTodo.appendChild(optionProjectsMenuContainer);
    const selectMenuProjects = document.createElement('select');
    selectMenuProjects.name = 'project'
    selectMenuProjects.id = 'projectSelect';
    optionProjectsMenuContainer.appendChild(selectMenuProjects);
    const project1 = document.createElement('option')
    project1.value = 'Home1';
    project1.innerHTML = 'Home1';
    const project2 = document.createElement('option')
    project2.value = 'webdevelopment';
    project2.innerHTML = 'Web development';
    selectMenuProjects.appendChild(project2);
    selectMenuProjects.appendChild(project1);

    const buttonAdd = document.createElement('button');
    buttonAdd.classList.add('formSubmitBtn');
    buttonAdd.type='submit';
    buttonAdd.innerHTML = 'Add';
    const buttonCancel = document.createElement('button');
    buttonCancel.id='buttonCancel1'
    buttonCancel.type='button';
    buttonCancel.innerHTML = 'Cancel';
   buttonCancel.addEventListener('click', ()=>{
    formContainer.style.display='none';
   })
    formTodo.appendChild(buttonAdd);
    formTodo.appendChild(buttonCancel);
   
    return formContainer;
}