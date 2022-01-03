import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";

const Login = () => {
  const [currentUser, setCurrentUser] = useState({
    username: "", 
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setCurrentUser(prev => {
      return {
          ...prev,
          [e.target.name]: e.target.value,
      }
  })}

   const [users, setUsers] = useState([])

  useEffect(() => {
    if (localStorage.getItem('Users')) {
      setUsers(JSON.parse(localStorage.getItem('Users')));
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
     if (users.some((user) => (user.email === currentUser.email && user.password === currentUser.password && user.username === currentUser.username))) {
      localStorage.setItem('CurrentUser', JSON.stringify(currentUser));
      window.location.pathname = '/mainpage';
    } else {
      console.log('Неверно введены данные')
    } 
}

  return (
    <div className={classes.login}>
      <h2>Login:</h2>
      <form onSubmit={handleSubmit}>
      <p>
          Name:
          <input type="text" id="username" name="username" value={currentUser.username} onChange={handleChange}/>
        </p>
        <p>
          Email:
          <input type="email" id="email" name="email" value={currentUser.email} onChange={handleChange}/>
        </p>
        <p>
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={currentUser.password}
            onChange={handleChange}
          />
        </p>
        <div className={classes.alert}></div>
        <div>
          <button type='submit'>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

