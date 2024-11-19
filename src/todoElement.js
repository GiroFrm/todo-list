
import { parseISO, format } from 'date-fns';
import { setUpEditForm } from './setupEventListeners';
import { renderTodos } from './domRenderer';

export function createTodoElement(todo, project) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');

    const todoHeader = document.createElement('div');
    todoHeader.classList.add('todo-header');
    todoContainer.appendChild(todoHeader);

    const label = document.createElement('label');
    label.classList.add('container');
    todoHeader.appendChild(label);

    const titleTodo = document.createElement('p');
    titleTodo.innerHTML = todo.title;
    label.appendChild(titleTodo);

    const date = document.createElement('p');
    date.classList.add('date-todo');
    label.appendChild(date);

    const input = document.createElement('input');
    input.type = "checkbox";
    label.appendChild(input);

    const span = document.createElement('span');
    span.classList.add('checkmark');
    label.appendChild(span);

    const edit = createEditButton(todo, project);
    const cancel = createDeleteButton(todo, project);

    todoContainer.appendChild(edit);
    todoContainer.appendChild(cancel);

    if (todo.dueDate) {
        const dateNumber = parseISO(todo.dueDate);
        const dayNumber = format(dateNumber, 'd');
        const abbreviatedMonthName = format(dateNumber, 'MMM');
        date.innerHTML = `${abbreviatedMonthName} ${dayNumber}`;
    }

    input.addEventListener('change', () => {
        toggleTodoComplete(input, todoHeader, edit, cancel, todo);
    });

    return todoContainer;
}

function createEditButton(todo, project) {
    const edit = document.createElement('p');
    edit.innerHTML = 'edit';
    edit.style.cursor = "pointer";
    edit.addEventListener("click", () => {
        document.querySelector('#editFormTodo').style.display = "block";
        const formEditTask = document.querySelector('.addEditTaskform');
        formEditTask.style.display = "block";
        document.getElementById('titleInputEdit').value = todo.title;
        document.getElementById('descriptionInputEdit').value = todo.description;
        setUpEditForm(todo.title, project.name, todo.priority, todo.dueDate);
    });
    return edit;
}

function createDeleteButton(todo, project) {
    const cancel = document.createElement('p');
    cancel.innerHTML = 'delete';
    cancel.classList.add('todo-delete');
    cancel.style.cursor = "pointer";
    cancel.addEventListener('click', () => {
        project.removeTodo(todo);
        renderTodos(project.name);
    });
    return cancel;
}

function toggleTodoComplete(input, todoHeader, edit, cancel, todo) {
    if (input.checked) {
        edit.style.display = "none";
        cancel.style.display = "none";
        todoHeader.style.textDecoration = "line-through";
        todo.toggleCompleted();
    } else {
        edit.style.display = "block";
        cancel.style.display = "block";
        todoHeader.style.textDecoration = "none";
        todo.toggleCompleted();
    }
}
