const express = require("express");
const path = require("path");
const { TodoStore } = require("./todos");
const { error } = require("console");

const app = express();


//middleware-use
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());


const todoInstance = new TodoStore();


app.get("/welcome", (request, response) => {
    response.json({
        message: "hii, welcome...."
    })
})

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/api/v1/todos", (req, res) => {
    const allTodos = todoInstance.getAllTodo();
    res.status(200).json({
        status: true,
        allTodos: allTodos
    })
})

app.post("/api/v1/todos", (req, res) => {
    const { taskText, isTaskDone } = req.body;

    if (!taskText.trim() || typeof taskText !== 'string') {
        res.status(400).json({
            error: true,
            message: "Task Text should not be empty and It should be of type string"
        })
    }

    const newTask = todoInstance.saveTodo(taskText, isTaskDone);
    res.status(200).json({
        success: true,
        message: "new task is entered",
        newTask: newTask
    })

})

app.delete("/api/v1/todos/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const deletedTask = todoInstance.deleteTodo(taskId);

    if (!deletedTask) {
        return res.status(400).json({
            success: false,
            message: "Task not found"

        })
    }

    return res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        deletedTaskId: deletedTask.taskId
    })


})

app.patch("/api/v1/todos/toggle/:taskId", (req, res) => {
    const { taskId } = req.params;

    if (!taskId) {
        return res.status(400).json({
            error: true,
            message: "You should pass taskId as a param, to toggle it"
        })
    }
    const isTaskToggled = todoInstance.toggleTask(Number(taskId));

    if (!isTaskToggled) {
        return res.status(400).json({
            error: true,
            message: `Task with ${taskId} hasn't toggled`
        })
    }

    return res.status(200).json({
        success: true,
        message: "Task has been toggled successfully"
    })

})

app.put("/api/v1/todos/edit/:editTaskId", (req, res) => {
    const { editTaskId } = req.params;
    const { newTaskText } = req.body;

    if (!editTaskId || !newTaskText || typeof newTaskText !== "string" || !newTaskText.trim()) {
        return res.status(400).json({
            error: true,
            message: "You must provide a valid taskId and non-empty newTaskText"

        })
    }

    const editedTask = todoInstance.editTask(Number(editTaskId), newTaskText)

    if (!editedTask) {
        return res.status(404).json({
            error: true,
            message: `task with ${editTaskId}  not found`
        })
    }

    return res.status(200).json({
        success: true,
        message: "task edited successfully",
        editedTask: editedTask
    })

})

app.listen(3000, () => {
    console.log("listening...");
    console.log("http://localhost:3000")
});