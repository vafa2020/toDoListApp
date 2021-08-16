import ToDo from "../ToDo/ToDo";
import classes from "./ToDoList.module.css";
const ToDoList = ({ todos, onComplete, onEdit,Delete }) => {
  if (todos.length === 0) {
    return <div>Enter some todos</div>;
  }
  return (
    <div className={classes.ToDoList}>
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onEdit={() => onEdit(todo.id)}
          Delete={()=>Delete(todo.id)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
