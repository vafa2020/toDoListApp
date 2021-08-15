import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import classes from "./ToDoApp.module.css";
const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const add = (todo) => {
    const item = {
      value: todo,
      id: Math.floor(Math.random() * 1000),
      isComplate: false,
    };
    setTodos([...todos, item]);
   
  };
  return (
    <div className={classes.Container}>
      <ToDoForm add={add} />
      <ToDoList todos={todos} />
    </div>
  );
};

export default ToDoApp;
