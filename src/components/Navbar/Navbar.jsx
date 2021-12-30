import React from "react";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const menu = props.menu;

  return (
    <nav className={classes.nav}>
      <ul>
        {menu.map((item, index) => (
          <li>
            <a key={index} href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>  
  );
};

export default Navbar;
