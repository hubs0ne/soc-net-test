import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://i.ibb.co/71L0JwN/hubsMini.png" />
      <div className={s.login_block}>
        { props.isAuth ? props.login : 
        <NavLink to={'/login'}>Login</NavLink>
      }
      </div>
    </header>
  );
};

export default Header;
