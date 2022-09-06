import React, { Fragment } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <span>HOME</span>
        <span>STORE</span>
        <span>ABOUT</span>

        <button className={classes.button}> Cart </button>
        <span> 0 </span>
      </header>
      <h1 className={classes.h1}> The Generics </h1>

      <section>
        <h2 className={classes.music}> MUSIC </h2>
      </section>
    </Fragment>
  );
};

export default Header;
