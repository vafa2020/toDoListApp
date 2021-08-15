import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import classes from "./ToDoApp.module.css";
const ToDoApp = () => {
  const[todos,setTodos]=useState()
  return (
    <div className={classes.Container}>
     <ToDoForm/>
     <ToDoList/>
    </div>
  );
};

export default ToDoApp;
