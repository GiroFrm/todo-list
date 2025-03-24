
function createTodo(title, description, priority, dueDate, completed =false ) {
    return {
        title,
        description,
        priority,
        dueDate,
        completed,
        toggleCompleted() {
            this.completed = !this.completed;
        },
        editTodo(newTitle, newDescription, newPriority, newDueDate) { // edit todo. method inside return func.
            if (newTitle) this.title = newTitle;
            if (newDescription) this.description = newDescription;
            if (newPriority) this.priority = newPriority;
            if (newDueDate) this.dueDate = newDueDate;
        }

    }
}

export default createTodo;