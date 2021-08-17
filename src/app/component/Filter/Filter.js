import React from "react";
import Select from "react-select";
import classes from "./Filter.module.css";

const options = [
  { value: "All", label: "All" },
  { value: "Complete", label: "Complete" },
  { value: "UnComplete", label: "UnComplete" },
];
const Filter = ({ status ,onChange}) => {


  return (
    <Select
      className={classes.select}
      value={status}
      onChange={onChange}
      options={options}
    />
  );
};

export default Filter;
