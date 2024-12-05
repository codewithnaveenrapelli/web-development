
const todoLists = document.querySelector(".todoList");
const listValue = document.querySelector(".todoValue");
let todoListValue = [];
const getTodoList = () => {
    return JSON.parse(localStorage.getItem("todoData")) || [];
}
const addTodoListLocalStorage = (todo) => {
    return localStorage.setItem("todoData", JSON.stringify(todo));
}
const showTodoList = () => {
    todoListValue = getTodoList();
    todoListValue.forEach((currentTodo) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = currentTodo;
        todoLists.append(liElement);
    });
}
const removeTodoList = (e) => {
    let curr = e.target;
    updatedTodoList = todoListValue.filter((currentTodoValue) => currentTodoValue != curr.textContent);
    addTodoListLocalStorage(updatedTodoList);
    curr.remove();
}
const addTodoList = (e) => {
    e.preventDefault();
    todoListValue = getTodoList();
    let newTodo = listValue.value.trim();
    listValue.value = ""
    if (newTodo.length != 0 && !todoListValue.includes(newTodo)) {
        todoListValue.push(newTodo)
        addTodoListLocalStorage(todoListValue);
        const liElement = document.createElement("li");
        liElement.innerHTML = newTodo;
        todoLists.append(liElement);
    }
};
showTodoList();
document.querySelector(".btn").addEventListener('click', (e) => {
    addTodoList(e);
})
todoLists.addEventListener('click', (e) => removeTodoList(e))
