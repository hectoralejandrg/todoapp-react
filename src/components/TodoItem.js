import React, { useState } from "react";

const TodoItem = ({ item, handleUpdate, handleDelete }) => {
  const { id, task, student, isCompleted } = item;
  const [update, setUpdate] = useState(item);

  return (
    <div className="card m-1 p-1">
      <div className="d-flex justify-content-between align-items-center">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isCompleted}
          id="is-completed"
          onChange={(e) => {
            item.isCompleted = e.target.checked;
            setUpdate(item);
            handleUpdate(update);
          }}
        />
        <p>
          {task} - {student}
        </p>
        <button
          className="btn-close"
          onClick={() => handleDelete(id)}
        ></button>
      </div>
    </div>
  );
};

export default TodoItem;
