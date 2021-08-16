import { useState } from "react";
import ToDo from "../ToDo/ToDo";
import ToDoForm from "../ToDoForm/ToDoForm";
import classes from "./ToDoList.module.css";
const ToDoList = ({ todos, onComplete, editTodo,Delete }) => {
  const [edit, setEdit] = useState({ id: null, value: "", isComplete: false });
  const render = () => {
    if (todos.length === 0) {
      return <p>Enter some todos</p>;
    } else {
      return (
        <div className={classes.ToDoList}>
         { todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            onComplete={() => onComplete(todo.id)}
            Delete={() => Delete(todo.id)}
            onEdit={() => setEdit(todo)}
          />
          ))}
        </div>
      );
    }
  };
  const updateTodo=(newTodo)=>{
    editTodo(edit.id,newTodo);
    setEdit({id: null, value: "", isComplete: false })
  }

  return <div>{edit.id ? <ToDoForm submitTodo={updateTodo} edit={edit} /> : render()}</div>;
};

export default ToDoList;
