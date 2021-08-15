import { useEffect, useState } from "react";
import ToDo from "../ToDo/ToDo";
import classes from "./ToDoList.module.css";
const ToDoList = ({ todos }) => {
  if (todos.length === 0) {
    return <div>Enter some todos</div>;
  }
  return (
    <div className={classes.ToDoList}>
      {todos.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ToDoList;
