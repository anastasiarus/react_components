import React from "react";
import classes from "./Card.module.css"



const Card = (props) => {

    return  <div className={classes.card} key={props.id} >
        <h3  className={classes.main}>{props.title}</h3>
        <p className={classes.desc}>{props.text}</p>
        <img className={classes.img} src={props.img} alt="card" />
    </div>
    
}

export default Card