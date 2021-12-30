import React, { useState } from "react";
import classes from "./Login.module.css";

const Login = () => {
  const [log, setLog] = useState(() => {
    return {
      username: "",
      email: "",
      password: "",
    };
  });

  const handleClick = event => {
    setLog(event.target.value)
}

localStorage.setItem('username', log.username);
localStorage.setItem('email', log.email);
localStorage.setItem('password', log.password);


  return (
    <div className={classes.login}>
      <h2>Login:</h2>
      <form>
        <p>
          Name:
          <input
            type="username"
            id="username"
            name="username"
            value={log.username}
            onChange={handleClick}
          />
        </p>
        <p>
          Email:
          <input type="email" id="email" name="email" value={log.email} onChange={handleClick}/>
        </p>
        <p>
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={log.password}
            onChange={handleClick}
          />
        </p>
        <input className={classes.enter} type="submit" />
      </form>
    </div>
  );
};

export default Login;
