import React, { useState } from "react";
import classes from "./Registration.module.css";

const Registration = () => {
  const [register, setRegister] = useState(() => {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
    };
  });

  const handleClick = event => {
    setRegister(event.target.value)
}

  return (
    <div className={classes.registration}>
      <h2>Registration:</h2>
      <form>
        <p>
          Name:
          <input
            type="username"
            id="username"
            name="username"
            value={register.username}
            onChange={handleClick}
          />
        </p>
        <p>
          Email:
          <input type="email" id="email" name="email" value={register.email} onChange={handleClick}/>
        </p>
        <p>
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={register.password}
            onChange={handleClick}
          />
        </p>
        <p>
          Repeat password:
          <input
            type="password"
            id="password2"
            name="password2"
            value={register.password2}
            onChange={handleClick}
          />
        </p>
        <input className={classes.submit} type="submit" />
      </form>
    </div>
  );
};

export default Registration;
