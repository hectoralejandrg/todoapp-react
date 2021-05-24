import axios from "axios";

const baseUrl = `https://todos-go.herokuapp.com/api`;

export const getTodo = () => axios.get(`${baseUrl}/todos`);

export const postTodo = (newTask) =>
  axios({
    method: "POST",
    url: `${baseUrl}/todos`,
    data: newTask,
  });

export const putTodo = (updateTask) =>
  axios({
    method: "PUT",
    url: `${baseUrl}/todos/${updateTask.id}`,
    data: updateTask,
  });

export const deleteTodo = (id) =>
  axios({
    method: "DELETE",
    url: `${baseUrl}/todos/${id}`,
  });
