import "pages/Dashboard/Dashboard.css";
import InputTodo from "components/InputTodo/InputTodo";
import TodoContainer from "components/TodoContainer/TodoContainer";
import { getAllTask, addTask, completeTask, deleteTask } from "api/postApi";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const username = location.state?.username;

  const [tasks, setTasks] = useState([]);

  // Fetch tasks function stable with useCallback
  const fetchTasks = useCallback(async () => {
    try {
      const res = await getAllTask(username);
      console.log("Tasks API result:", res);
      setTasks(res.tasks || []);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  }, [username]); // thêm username nếu fetchTasks phụ thuộc vào nó

  // Fetch tasks at first or when username changes
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]); // fetchTasks stable → ESLint không báo lỗi

  // CRUD SECTION
  const handleAdd = async (taskText) => {
    await addTask(taskText, username);
    fetchTasks();
  };

  const handleComplete = async (id) => {
    await completeTask(id);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="ContainerDashboard">
      <InputTodo onAdd={handleAdd} />
      <TodoContainer
        data={tasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Dashboard;
