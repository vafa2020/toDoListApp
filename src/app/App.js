import classes from "./App.module.css";
import ToDoApp from "./component/ToDoApp/ToDoApp";

function App() {
  return (
    <div className={classes.App}>
      <h1>My ToDoApp-Mh.Vafaee</h1>
      <ToDoApp/>
    </div>
  );
}

export default App;
