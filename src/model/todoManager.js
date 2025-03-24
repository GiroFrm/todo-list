

export function addTodoToProjectManager(todo, project) {
    if (!project) {
        throw new Error(`Project with name ${projectName} does not exist`);
    }
    project.addTodo(todo)
    return project;
}

export function removeTodoFromProjectManager(project, todo) {
    if (!project) {
        throw new Error(`Project with name ${projectName} does not exist`);
    }
    project.removeTodo(todo);
}

export function getTodoByProjectManager(project, todoName) {
    if (project) {
        return project.getTodos().find(todo => todo.title === todoName);
    }
    return null;
}
