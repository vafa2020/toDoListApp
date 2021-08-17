import React, { useState } from "react";
import Select from "react-select";
import classes from "./Filter.module.css";

const options = [
  { value: "All", label: "All" },
  { value: "Complete", label: "Complete" },
  { value: "UnComplete", label: "UnComplete" },
];
const Filter = ({ filteredTodo }) => {
  const [state, setState] = useState();
  const handleChange = (selectedOption) => {
    filteredTodo(selectedOption.value)
    setState(selectedOption)
  };
  return (
    <Select
      className={classes.select}
      value={state}
      onChange={handleChange}
      options={options}
    />
  );
};

export default Filter;
