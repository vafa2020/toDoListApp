import { useEffect, useState } from "react";
import classes from "./ToDo.module.css";
const ToDo = ({ todo }) => {
  return (
    <div className={classes.Todo}>
      <div className={classes.Item}>{todo.value}</div>
      <div className={classes.Control}>
        <button className={classes.Edit}>Edit</button>
        <button className={classes.Complete}>Complete</button>
      </div>
    </div>
  );
};

export default ToDo;
