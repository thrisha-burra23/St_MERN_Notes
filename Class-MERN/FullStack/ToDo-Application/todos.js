
let nextId = 1;

//to enter tasks
function Task(taskText, isTaskDone) {
    this.taskId = nextId++;
    this.taskText = taskText;
    this.isTaskDone = isTaskDone;
    this.timeStamp = new Date();
}

//an array to save todo's
function TodoStore() {
    this.todoStore = [];

}

//function to save todo's in todo store 
TodoStore.prototype.saveTodo = function (taskText, isTaskDone) {
    const newTask = new Task(taskText, isTaskDone);

    this.todoStore.push(newTask);
    return newTask
}


TodoStore.prototype.getAllTodo = function () {
    return this.todoStore;
}

TodoStore.prototype.deleteTodo = function (taskId) {
    const deleteTaskID = this.todoStore.findIndex((task) => task.taskId === taskId);
     if (deleteTaskID === -1) return null;
    const deleteTask = this.todoStore.splice(deleteTaskID, 1)[0];
    return deleteTask;

}

TodoStore.prototype.toggleTask=function(taskIdToBeToggled){
const taskWithId=this.todoStore.find((task)=>task.taskId===taskIdToBeToggled);
console.log(taskWithId);
taskWithId.isTaskDone=!taskWithId.isTaskDone;
console.log(this.todoStore)
return true ;
}

TodoStore.prototype.editTask=function(taskId,newTaskText){
    const taskToBeEdited=this.todoStore.find((task)=>task.taskId===taskId)
    console.log(taskToBeEdited)
    if(!taskToBeEdited){
        console.log("no task exists")
        return null
    }
    taskToBeEdited.taskText=newTaskText;
    console.log(taskToBeEdited);
    return taskToBeEdited;
} 

module.exports = {
    TodoStore,
    Task
}