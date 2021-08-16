import { useEffect, useRef, useState } from "react";
import classes from "./ToDoForm.module.css";
const ToDoForm = ({ submitTodo, edit }) => {
  const [todo, setTodo] = useState(edit?edit.value:"");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputHandler = (event) => {
  setTodo(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!todo) {
      alert("enter your todo");
      return;
    }
    submitTodo(todo);

    setTodo("");
  };
  return (
    <div className={classes.ToDoForm}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={todo}
          onChange={inputHandler}
          placeholder={edit ? "update todo ..." : "add todo ..."}
          className={classes.Input}
          ref={inputRef}
        />
        <button className={classes.Button} type="submit">
          {edit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
