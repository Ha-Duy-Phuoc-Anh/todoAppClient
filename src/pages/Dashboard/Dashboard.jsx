import "pages/Dashboard/Dashboard.css";
import InputTodo from "components/InputTodo/InputTodo";
import TodoContainer from "components/TodoContainer/TodoContainer";
import { getAllTask, addTask, completeTask, deleteTask } from "api/postApi";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const username = location.state?.username;

  // Get all availible tasks
  const [tasks, setTasks] = useState([]);

  // Fetch tasks function
  const fetchTasks = async () => {
    try {
      const res = await getAllTask(username);
      console.log("Tasks API result:", res);
      setTasks(res.tasks || []);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // Fetch tasks at first
  useEffect(() => {
    fetchTasks();
  }, [username]);

  // CRUD SECTION
  // Add task
  const handleAdd = async (taskText) => {
    await addTask(taskText, username);
    fetchTasks();
  };

  // Complete task function
  const handleComplete = async (id) => {
    await completeTask(id);
    fetchTasks();
  };

  // Delete task function
  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <>
      <div className="ContainerDashboard">
        <InputTodo onAdd={handleAdd} />
        <TodoContainer
          data={tasks}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Dashboard;
