const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
let isTodoListEmpty = true;
let globalTodo = [];

document.addEventListener("DOMContentLoaded", loadTodo);
const BASE_URL = "http://localhost:3000";

async function loadTodo() {
    const response = await fetch(`${BASE_URL}/api/v1/todos`)
    if (!response.ok) {
        alert("the url is invalid");
    }

    const data = await response.json();
    console.log(data.allTodos);
    globalTodo.push(...data.allTodos)
    renderTodo(globalTodo)
}


todoForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    console.log("form is submited")

    const newTodoText = todoInput.value.trim();

    if (newTodoText === "") {
        alert("please enter a value")
        return;
    }

    const options = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            taskText: newTodoText,
            isTaskDone: false
        })
    }

    const response = await fetch(`${BASE_URL}/api/v1/todos`, options)
    if (!response.ok) {
        alert("Add todo url is invalid");
    }

    todoInput.value = "";

    const data = await response.json();
    console.log(data.newTask);
    console.log(data);
    globalTodo.push(data.newTask)

    const newListItem = createListItem(data.newTask)

    if (isTodoListEmpty) {
        todoList.innerHTML = ""
        isTodoListEmpty = false;
    }

    todoList.prepend(newListItem);

})

function createListItem(taskObject) {
    const li = document.createElement("li");
    const spanText = document.createElement("span");
    const spanDate = document.createElement("span");
    const p = document.createElement("p");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");


    deleteButton.textContent = "Delete"
    editButton.textContent = "Edit"

    deleteButton.setAttribute("id", "delbtn");
    editButton.setAttribute("id", "editbtn");

    deleteButton.addEventListener("click", () => handleDelete(taskObject.taskId))
    editButton.addEventListener("click", () => handleEdit(taskObject.taskId))
    checkBox.addEventListener("change", () => toggleTask(taskObject.taskId));


    spanText.textContent = taskObject.taskText;
    spanDate.textContent = taskObject.timeStamp;

    p.appendChild(spanText);
    p.appendChild(spanDate);

    li.appendChild(checkBox);
    li.appendChild(p)
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    return li;
}

function renderTodo(todos) {
    todoList.innerHTML = ""
    if (todos.length === 0) {
        todoList.innerHTML = "<p>No todos found. Please add some tasks</p>"
        return
    }
    isTodoListEmpty = false;
    todos.map((todo) => {
        const newListItem = createListItem(todo);
        todoList.prepend(newListItem);
    })

}

async function handleDelete(id) {
    console.log("delete clicked...", id)
    const response = await fetch(`${BASE_URL}/api/v1/todos/${id}`, { method: "DELETE" });

    if (!response.ok) {
        alert("invalid url")
        return
    }

    const data = await response.json();

    console.log(data)
    console.log("Before filtering the globalTodo: ", globalTodo)

    globalTodo = globalTodo.filter((task) =>
        task.taskId !== Number(id)
    )
    console.log("After filtering the globalTodo: ", globalTodo)

    renderTodo(globalTodo)

}

 async function handleEdit(id) {
    console.log("Edit clicked...", id)

    const taskToBeEdited = globalTodo.find((task) => task.taskId === id)
    if (!taskToBeEdited) {
        alert("task not found");
        return
    }

    const newTaskText = prompt("Enter new task text", taskToBeEdited.taskText);
    console.log("edited task", newTaskText);

    if (!newTaskText) {
        alert("enter new tasktext to be edited");
        return;
    }

    const options = {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify({ newTaskText: newTaskText })
    }

    const response=await fetch(`${BASE_URL}/api/v1/todos/edit/${id}`,options)

    if(!response.ok){
        alert("invalid url");
        return
    }

    const data= await response.json();
    console.log(data);

    globalTodo=globalTodo.map((task)=>task.taskId===id?{...task, taskText:newTaskText}:task)

    renderTodo(globalTodo)

}

async function toggleTask(taskIdToBeToggled) {
    console.log("checkbox clicked", taskIdToBeToggled)
    const response = await fetch(`${BASE_URL}/api/v1/todos/toggle/${taskIdToBeToggled}`, { method: "PATCH" })

    if (!response.ok) {
        alert("Invalid url")
        return
    }

    const data = await response.json();
    console.log(data);
}

