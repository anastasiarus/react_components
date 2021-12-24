import React from "react";
import classes from "./Card.module.css"



const Card = ({id, title, text, img}) => {

    return <div className={classes.card} key={id} >
        <h3  className={classes.main}>{title}</h3>
        <p className={classes.desc}>{text}</p>
        <img className={classes.img} src={img} alt="card" />
    </div>
}

export default Card