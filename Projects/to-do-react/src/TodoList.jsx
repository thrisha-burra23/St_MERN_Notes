import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    console.log("clicked to add a task");
    if (task.trim != "") {
      setTodo((prevTodo) => [...prevTodo, task]);
      setTask("");
    } else {
      alert("enter a task");
    }

    console.log(todo);
  };

const  handleEdit=()=>{
    console.log("clicked Edit...")
}

const  handleDelete=()=>{
    console.log("clicked Delete...")
}


  return (
    <div>
      <input
        type="text"
        placeholder="Enter the task to add"
        onChange={(event) => setTask(event.target.value)}
        value={task}
      />
      <button className="bg-blue-300 p-2 rounded-xl" onClick={handleAdd}>
        Add Task
      </button>
      <h1>Tasks....</h1>
      <ul>
        {todo.map((task) => (
            <div className="flex border-b-2 m-3 ">
          <li>{task}</li>
          <button className="bg-violet-400 m-2 p-2 rounded-xl" onClick={handleEdit}>Edit</button>
          <button className="bg-red-500 m-2 p-2 rounded-xl" onClick={handleDelete}>Delete</button></div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
