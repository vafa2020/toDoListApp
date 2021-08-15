import { useState } from "react";
import classes from "./ToDoForm.module.css";
const ToDoForm = (props) => {
  const [todo, setTodo] = useState("") ;

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!todo) {
      alert("enter your todo");
      return;
    }
    props.add(todo);
    setTodo("");
  };
  return (
    <div className={classes.ToDoForm}>
      <form onSubmit={submitHandler}>
        <input type="text" value={todo} onChange={inputHandler} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
