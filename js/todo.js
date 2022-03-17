const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const todos = [];

function handleTodoSubmit(event) {
    event.preventDefault();
    const todoInput = todoForm.querySelector("input");
    const newTodo = todoInput.value;
    todos.push(newTodo);
    displayTodoList(newTodo);
    saveTodo(newTodo);
    todoInput.value = ""; // Empty todDoInput value.
}


function saveTodo(newTodo) {
    localStorage.setItem(TODOS_KEY, todos);
}

function handleDeleteTodo(event) {
    const targetLi = event.target.parentElement; //event.target.parentElement shows parent element of clicked button.
    targetLi.remove();
}

function displayTodoList(newTodo) {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    newSpan.innerText = newTodo;
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