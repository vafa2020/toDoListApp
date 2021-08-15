import { useEffect, useState } from "react";
import classes from "./ToDoList.module.css";
const ToDoList = ({ todos }) => {
  const [list, setList] = useState([]);
  // useEffect(() => {
  //   setList([...list, todos]);
  // }, [list]);
  return (
    <div className={classes.ToDoList}>
      {list.map((item) => {
        console.log(item);
        <ul key={item.id}>
          <li>item.value</li>
        </ul>;
      })}
    </div>
  );
};

export default ToDoList;
