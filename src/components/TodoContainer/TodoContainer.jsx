import Task from "./Task/Task";
import "./TodoContainer.css";

const TodoContainer = ({ data, onComplete, onDelete }) => {
  // UI
  return (
    <>
      <div className="TodoBoard">
        {data.map(({ id, task, complete }) => (
          <Task
            key={id}
            todo={task}
            isComplete={complete}
            completeFunc={() => onComplete(id)}
            deleteFunc={() => onDelete(id)}
          />
        ))}
      </div>
    </>
  );
};

export default TodoContainer;
