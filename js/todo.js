const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = [];

function handleTodoSubmit(event) {
    event.preventDefault();
    const todoInput = todoForm.querySelector("input");
    const newTodo = {
        id: Date.now(),
        text: todoInput.value
    };
    todos.push(newTodo);
    displayTodoList(newTodo);
    saveTodo();
    todoInput.value = ""; // Empty todDoInput value.
}

function handleDeleteTodo(event) {
    const targetLi = event.target.parentElement; //event.target.parentElement shows parent element of clicked button.
    targetLi.remove();
}

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); // JSON.stringify saves todos in array format.
}

function deleteTodo() {
    
}

function displayTodoList(newTodo) {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    const todoText = newTodo.text;
    const todoID = newTodo.id;
    
    newLi.id = todoID;
    newSpan.innerText = todoText;
    newButton.innerText = "X";
    newButton.addEventListener("click", handleDeleteTodo);

    newLi.classList.add("all");
    newSpan.classList.add("all");
    newButton.classList.add("all");
    
    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);
    todoList.appendChild(newLi);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(displayTodoList);
}