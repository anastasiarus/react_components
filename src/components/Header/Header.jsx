import React from "react";
import classes from "./Header.module.css"


const Header = () => {
    return <header className={classes.header}>
        <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/4eebee67599783.Y3JvcCwyMzYxLDE4NDcsNTcyLDMxNQ.jpg" alt="" />
        <p className={classes.name}>ПРИЛОЖЕНИЕ</p>

    </header>
}

export default Header