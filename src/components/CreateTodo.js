import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";

const CreateTodo = ({ handleCreate }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    handleCreate(values);
  };
  return (
    <div className="col-4 text-start">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="id-student" className="form-label text-light">
            Student:
          </label>
          <input
            type="text"
            className="form-control"
            id="id-student"
            placeholder="Name student"
            {...register("student", { required: true })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="id-task" className="form-label text-light">
            Task:
          </label>
          <textarea
            className="form-control"
            id="id-task"
            rows="3"
            placeholder="Describe task..."
            {...register("task", { required: true })}
          ></textarea>
        </div>
        <button className="btn btn-success"><FontAwesomeIcon icon={faSave}/>  Save</button>
      </form>
    </div>
  );
};

export default CreateTodo;
