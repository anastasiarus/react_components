import { useState } from "react"
import classes from "./Squares.module.css"

function Squares() {
  const [count, setCount] = useState('red')

  const hidden = (value) => {
      setCount(value)
      console.log(count)
  }

  return(
      <div className={classes.square}>
          {count ==='red' && <div className={classes.red} onClick={() => hidden('green')}/>}
          {count ==='green' && <div className={classes.green} onClick={() => hidden('red')}/>}
      </div>
  );
}

export default Squares;
