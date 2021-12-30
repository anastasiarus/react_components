import React from "react";
import classes from './RegForm.module.css'

const RegForm = () => {
    return <div className={classes.regForm}>
        <div><a href="/registration">Registration</a></div>
        <div><a href="/login">Login</a></div>
        <div><a href="/mainpage">Main Page</a></div>
    </div>
}

export default RegForm; 