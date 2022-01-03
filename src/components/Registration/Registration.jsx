import React, { useState, useEffect } from "react";
import classes from "./Registration.module.css";

const Registration = () => {
  const [currentUser, setCurrentUser] = useState({
    username: "", 
    email: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    setCurrentUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("Users")) {
      setUsers(JSON.parse(localStorage.getItem("Users")));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentUser.password1 === currentUser.password2) {
      const loginUser = {
        username: currentUser.username,
        email: currentUser.email,
        password: currentUser.password1,
      };
      localStorage.setItem("CurrentUser", JSON.stringify(loginUser));
      localStorage.setItem("Users", JSON.stringify(users.concat(loginUser)));
      window.location.pathname = "/mainpage"; 
    } else console.log('Ошибка')
  };

  return (
    <div className={classes.registration}>
      <h2>Registration:</h2>
      <form onSubmit={handleSubmit}>
      <p>
          Name:
          <input
            type="text"
            id="username"
            name="username"
            value={currentUser.username}
            onChange={handleChange}
          />
        </p>
        <p>
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value={currentUser.email}
            onChange={handleChange}
          />
        </p>
        <p>
          Password:
          <input
            type="password"
            id="password1"
            name="password1"
            value={currentUser.password1}
            onChange={handleChange}
          />
        </p>
        <p>
          Repeat password:
          <input
            type="password"
            id="password2"
            name="password2"
            value={currentUser.password2}
            onChange={handleChange}
          />
        </p>
        <div className={classes.alert}></div>
        <div>
          <button type="submit">Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
