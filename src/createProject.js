import createTodo from "./createTodo";

export default function createProject(name) {
  let todos =[]
  return {
    name,
    addTodo(todo) {
        if(todos.find(element=> element.title === todo.title )) return 
        todos.push(todo);
    },
    removeTodo(todo){
        todos = todos.filter(element => element.title !== todo.title);
        
    },

    getTodos() {
        return  [...todos]; 
    }
  }
}