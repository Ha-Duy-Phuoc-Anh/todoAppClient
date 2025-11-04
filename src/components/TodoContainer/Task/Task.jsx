
import "components/TodoContainer/Task/Task.css";

const Task = ({ todo, isComplete, completeFunc, deleteFunc }) => {
  return (
    <>
      <div className={`Task ${isComplete ? "Completed" : "Uncomplete"}`}>
        <p>{todo}</p>
        <button onClick={isComplete ? deleteFunc : completeFunc}>{isComplete ? "⨉" : "🗸"}</button>
      </div>
    </>
  );
};

export default Task;
