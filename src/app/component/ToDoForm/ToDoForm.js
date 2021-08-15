import { useState } from "react";
import classes from "./ToDoForm.module.css";
const ToDoForm = () => {
  const [todo, setTodo] = useState("");

  const inputHandler = (event) => {
    setTodo(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault()
    const item={
      value:todo,
      id:Math.floor(Math.random()*100)
    }
    console.log(item);
    return item
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
