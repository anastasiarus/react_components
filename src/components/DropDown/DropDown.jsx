import React, { createContext, useState } from "react";
import ListItem from "../ListItem/ListItem.jsx";
import classes from "./DropDown.module.css";

const DropDown = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const onCheck = (ingredientName, checked) => {
    console.log(ingredientName, checked);
  };

  return (
    <div className={classes.dropDownWrapper}>
      <button
        className={classes.btnDropDown}
        onClick={handleOpen}
        type="button"
      >
        Нажми меня
      </button>
      {isOpen && (
        <div>
          <ListItem ingredientName="Мясо" onCheck={onCheck} type="checkbox" />
          <ListItem ingredientName="Яйца" onCheck={onCheck} type="stepper" />
          <ListItem ingredientName="Соль" onCheck={onCheck} type="checkbox" />
          <ListItem ingredientName="Мука" onCheck={onCheck} type="checkbox" />
          <ListItem ingredientName="Огурец" onCheck={onCheck} type="stepper" />
          <ListItem ingredientName="Помидор" onCheck={onCheck} type="stepper" />
        </div>
      )}
    </div>
  );
};

export default DropDown;
