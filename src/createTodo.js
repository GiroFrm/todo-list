
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
        editTodo({ newTitle, newDescription, newPriority, newDueDate } = {}) { // edit todo. method inside return func.
        if (newTitle !== undefined) this.title = newTitle;
        if (newDescription !== undefined) this.description = newDescription;
        if (newPriority !== undefined) this.priority = newPriority;
        if (newDueDate !== undefined) this.dueDate = newDueDate;
        }

    }
}

export default createTodo;