import React, { createContext, useState } from "react";
import ListItem from "../ListItem/ListItem.jsx";
import classes from "./DropDown.module.css";

export const Context = createContext()
const DropDown = () => {
  const [context, setContext] = useState({})
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const onCheck = (ingredientName, checked) => {
    console.log(ingredientName, checked);
  };
  const setValue = (value) => {
    setContext(prevContext => ({prevContext, value}))
  }

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
        <Context.Provider value={setValue}>
        <div>
          <ListItem ingredientName="Мясо" onCheck={onCheck} type="checkbox" />
          <ListItem ingredientName="Яйца" onCheck={onCheck} type="stepper" />
          <ListItem ingredientName="Соль" onCheck={onCheck} type="checkbox" />
          <ListItem ingredientName="Мука" onCheck={onCheck} type="checkbox" />
          <ListItem ingredientName="Огурец" onCheck={onCheck} type="stepper" />
          <ListItem ingredientName="Помидор" onCheck={onCheck} type="stepper" />
        </div>
        </Context.Provider>
      )}
    </div>
  );
};

export default DropDown;
