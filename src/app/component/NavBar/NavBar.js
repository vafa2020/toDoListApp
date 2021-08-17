import React from "react";
import classes from "./NavBar.module.css";

const NavBar = ({ unCompelete }) => {
  if(!unCompelete) return <h2 className={classes.Title}>set your todey todos</h2>;
  return (
    <header className={classes.Header}>
      <span className={classes.Count}>{unCompelete}</span>
      <h2 className={classes.Title}>
        {unCompelete > 1 ? "are" : "is"} unComplete{" "}
        {unCompelete > 1 ? "todos" : "todo"}
      </h2>
    </header>
  );
};

export default NavBar;
