import "./App.css";
import CreateTodo from "./assets/Components/CreateTodo";
import FetchTasks from "./assets/Components/FetchTasks";
import Title from "./assets/Components/Title";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add new tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to delete tasks by index
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="bg-dark text-light m-5 p-2 pb-5 rounded">
        <Title />
        <CreateTodo addTask={addTask} />
        <FetchTasks tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
