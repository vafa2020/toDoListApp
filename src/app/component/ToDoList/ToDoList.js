import { useEffect, useState } from "react";
import classes from "./ToDoList.module.css";
const ToDoList = ({ todos }) => {
  const [list, setList] = useState([]);
  // useEffect(() => {
  //   setList([...list, todos]);
  // }, [list]);
  return (
    <div className={classes.ToDoList}>
      {todos.map((item) => (
        <div className={classes.todo}>
          <div>
            <ul className={classes.items} key={item.id}>
              <li className={classes.item}>{item.value}</li>
            </ul>
          </div>
          <div>
            <button>Edit</button>
            <button>Complete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
