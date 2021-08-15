import { useState } from "react";
import classes from "./ToDoForm.module.css";
const ToDoForm = () => {
  const[todo,setTodo]=useState("")
  return (
    <div className={classes.ToDoForm}>
     <form >
       <input type="text" value={todo}/>
       <button type="submit">Add</button>
     </form>
    </div>
  );
};

export default ToDoForm;
