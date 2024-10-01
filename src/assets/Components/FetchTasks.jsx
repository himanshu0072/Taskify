import PropTypes from "prop-types";

function FetchTasks({ tasks, deleteTask }) {
  return (
    <div className="mt-4">
      <div className="innerBox rounded bg-light text-dark p-4 shadow-sm">
        <h1 className="text-center fs-3 mb-4">Todays Tasks</h1>
        <div className="d-flex flex-column">
          {tasks.length === 0 ? (
            <p className="text-center">
              No tasks available. Please add a task!
            </p>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center border rounded p-3 mb-2 bg-white flex-wrap"
              >
                <div className="d-flex flex-grow-1">
                  <span className="fs-5 mx-2">{index + 1}.</span>
                  <span className="fs-5 mx-2">{task.toDoTask}</span>
                  <span className="fs-6 text-muted mx-2">{task.date}</span>
                </div>
                <button
                  type="button"
                  className="btn btn-danger mt-2 mt-md-0" // Add margin top for mobile
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Validate prop types
FetchTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default FetchTasks;
