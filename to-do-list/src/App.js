import "./App.css";
import ListOfAllItems from "./components/ListOfAllItems";
import { useState } from "react";

function App() {
  const [task, setTask] = useState({
    task: "",
    finished: false,
  });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasks.some((item) => item.newTask === task.newTask) === false) {
      setTasks([...tasks, task]);
    }
  };
  const handleDone = (index) => {
    const updatedTasks = tasks.map((item, i) =>
      index === i ? { ...item, finished: !item.finished } : item
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((item, i) => i !== index);

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label for="taskField">Define your task</label>
        <input name="newTask" onChange={handleChange} id="taskField" />
        <button>Add a task</button>
      </form>
      <ListOfAllItems
        tasks={tasks}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
