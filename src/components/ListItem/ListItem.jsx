import React, { useContext, useState } from "react";
import classes from "./ListItem.module.css";
import { Context } from "../DropDown/DropDown";

const ListItem = ({ ingredientName, onCheck, type }) => {
  const setContext = useContext(Context)
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);
  

  const handleClick = () => {
    setChecked(!checked);
    onCheck(!checked, ingredientName);
    setContext(!checked, ingredientName)
  };

  const ingredientCount = (e) => {
    if (e.currentTarget.innerHTML === "+") {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    }
    if (e.currentTarget.innerHTML === "-") {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    }
  };

  return type === "checkbox" ? (
    <div className={classes.listWrapper}>
      {ingredientName}
      <input type="checkbox" checked={checked} onChange={handleClick} />
    </div>
  ) : (
    <div className={classes.listWrapper}>
      <button className={classes.btnCount} onClick={ingredientCount}>-</button>
      {ingredientName + " "}
      {count}
      <button className={classes.btnCount} onClick={ingredientCount}>+</button>
    </div>
  );
};

export default ListItem;
