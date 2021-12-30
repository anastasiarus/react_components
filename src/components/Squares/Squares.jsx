import { useState } from "react";
import classes from "./Squares.module.css";

function Squares() {
  const [state, setState] = useState("red");

  const hidden = (value) => {
    setState(value);
  };

  return (
    <div className={classes.square}>
      {state === "red" && (
        <div className={classes.red} onClick={() => hidden("green")} />
      )}
      {state === "green" && (
        <div className={classes.green} onClick={() => hidden("red")} />
      )}
    </div>
  );
}

export default Squares;
