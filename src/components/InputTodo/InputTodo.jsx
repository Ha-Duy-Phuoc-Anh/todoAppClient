import "./InputTodo.css";
import { useState } from "react";

const InputTodo = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleAddClick = () => {
    const trimmed = task.trim();
    if (!trimmed) return; // don't add empty tasks
    onAdd(trimmed);
    setTask("");
  };

  return (
    <div className="InputTodo">
      <h1>START A TASK TODAY!</h1>
      <input
        type="text"
        name="task"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddClick()}
      />
      <button type="button" onClick={handleAddClick}>
        ADD TASK
      </button>
    </div>
  );
};

export default InputTodo;
