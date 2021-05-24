import React, { useEffect, useState } from "react";
import { getTodo, postTodo, putTodo, deleteTodo } from "../services/api";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const [listTodo, setListTodo] = useState([]);
  const [newTask, setNewTask] = useState(null);
  const [updateTask, setUpdateTask] = useState(null);
  const [deleteTask, setDeleteTask] = useState(null);
  useEffect(() => {
    getTodo().then((result) => {
      setListTodo(result.data.todos);
    });
  }, []);

  /**Crea un nuevo task*/
  useEffect(() => {
    if (newTask) {
      postTodo(newTask).then(
        (res) => {
          setListTodo((prev) => [res.data, ...prev]);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }, [newTask]);

  /**Actualiza el task verificando el estado updateTask*/
  useEffect(() => {
    if (updateTask) {
      putTodo(updateTask).then(
        () => alert("Task update."),
        (err) => console.error(err)
      );
    }
  }, [updateTask]);

  /**Elimina el task verificando el estado deleteTask*/
  useEffect(() => {
    if (deleteTask) {
      deleteTodo(deleteTask).then(
        () => {
          setListTodo((prev) =>
            prev.filter((value) => value.id !== deleteTask)
          );
          alert("Task delete.");
        },
        (err) => console.error(err)
      );
    }
  }, [deleteTask]);

  const handleCreate = (values) => {
    setNewTask(values);
  };

  const handleUpdate = (values) => {
    setUpdateTask(values);
  };

  const handleDelete = (id) => {
    setDeleteTask(id);
  };

  const list = listTodo.map((element) => {
    return (
      <TodoItem
        key={element.id}
        item={element}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div className="container">
      <h1 className="text-center text-light mt-3">TO DO APP</h1>
      <div className="d-flex justify-content-center">
        <CreateTodo handleCreate={handleCreate} />
      </div>
      <div className="mt-3 mb-3">{list}</div>
    </div>
  );
};

export default TodoContainer;
