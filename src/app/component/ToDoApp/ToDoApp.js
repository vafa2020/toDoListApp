import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import classes from "./ToDoApp.module.css";
const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const item = {
      value: todo,
      id: Math.floor(Math.random() * 1000),
      isComplete: false,
    };
    setTodos([...todos, item]);
  };
  const onComplete = (id) => {
    const getIndex = todos.findIndex((x) => x.id === id);
    const getItem = { ...todos[getIndex] };
    getItem.isComplete = !getItem.isComplete;
    const updateTodos = [...todos];
    updateTodos[getIndex] = getItem;
    setTodos(updateTodos);
  };
  const onEdit = (id) => {
    const getIndex = todos.findIndex((x) => x.id === id);
    const getItem = { ...todos[getIndex] };
  };
  const deleteHandler = (id) => {
    //روش رایج
    const filtered = todos.filter((x) => x.id !== id);
    setTodos(filtered);
    //روش خودم
    // const getIndex = todos.findIndex((x) => x.id === id);
    // const updateTodos = [...todos];
    // updateTodos.splice(getIndex,1)
    // setTodos(updateTodos)
  };
  const updateTodo = (id, newTodo) => {
    const index = todos.findIndex((x) => x.id === id);
    const getItem = { ...todos[index] };
    getItem.value = newTodo;
    const updateTodos = [...todos];
    updateTodos[index] = getItem;
    setTodos(updateTodos);
  };
  return (
    <div className={classes.Container}>
      <ToDoForm submitTodo={addTodo} />
      <ToDoList
        todos={todos}
        onComplete={onComplete}
        onEdit={onEdit}
        Delete={deleteHandler}
        editTodo={updateTodo}
      />
    </div>
  );
};

export default ToDoApp;
