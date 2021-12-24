import React from "react";
import classes from "./Footer.module.css"


const Footer = () => {

    const date = new Date().getFullYear()
    return <footer className={classes.footer}>
        <h4 className={classes.foot}>"Copyright &copy;  { date } год "</h4> 
    </footer>
}

export default Footer