import classes from "./ToDo.module.css";
const ToDo = ({ todo, onComplete, onEdit,Delete }) => {
  return (
    <div className={classes.Todo}>
      <div
         onClick={onComplete} className={`${classes.Text} ${todo.isComplete ? classes.Completed : ""}`}
      >
        {todo.value}
      </div>
      <div className={classes.Control}>
        <button onClick={onEdit} className={classes.Edit}>
          Edit
        </button>
        <button onClick={Delete} className={classes.Complete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDo;
