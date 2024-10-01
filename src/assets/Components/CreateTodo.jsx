import { useState } from "react";
import PropTypes from "prop-types";

function CreateTodo({ addTask }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({ taskError: "", dateError: "" });

  // Function to validate the inputs
  const validate = () => {
    let taskError = "";
    let dateError = "";

    if (!task.trim()) {
      taskError = "Task description is required.";
    }

    if (!date) {
      dateError = "Date is required.";
    }

    if (taskError || dateError) {
      setErrors({ taskError, dateError });
      return false;
    }

    setErrors({ taskError: "", dateError: "" });
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      addTask({ toDoTask: task, date });
      setTask("");
      setDate("");
    }
  };

  return (
    <div className="innerBox rounded bg-light text-dark w-100 h-100 mt-3 p-3">
      <form className="d-flex flex-column flex-md-row justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2 flex-grow-1">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Task.."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          {errors.taskError && (
            <small className="text-danger">{errors.taskError}</small>
          )}
        </div>

        <div className="form-group mx-sm-3 mb-2 flex-grow-1">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.dateError && (
            <small className="text-danger">{errors.dateError}</small>
          )}
        </div>

        <button type="submit" className="btn btn-success mb-2 mt-2 mt-md-0">
          Add Task
        </button>
      </form>
    </div>
  );
}

// Validate prop types
CreateTodo.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default CreateTodo;
