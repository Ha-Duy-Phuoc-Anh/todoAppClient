import axiosClient from "./axiosClient";


const addTask = (task, username) => {
  const data = { task, username };
  // return the promise so callers can await the result / handle errors
  return axiosClient.post("/todo/add", data);
};
const getAllTask = (user) =>
  axiosClient.get(`/todo/get-all/${encodeURIComponent(user)}`);
const completeTask = (id) => axiosClient.patch(`/todo/${id}/complete`);
const deleteTask = (id) => axiosClient.delete(`/todo/${id}`);

export { addTask, getAllTask, completeTask, deleteTask };
