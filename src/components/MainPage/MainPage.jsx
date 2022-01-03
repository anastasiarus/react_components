
import React, { useState, useEffect } from "react";
import classes from "./MainPage.module.css";

const MainPage = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (localStorage.getItem('CurrentUser')) {
      setUsername(JSON.parse(localStorage.getItem('CurrentUser')).username);
    }
  }, [])

  return (
    <div className={classes.mainpage}>
        {username ? <span>Здравствуй, {username}</span> : null}
      </div>
  )
};


export default MainPage;