import React, { Fragment, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context";

const Header = (props) => {
  let number=10;
  
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  console.log("Hi", AuthContext.length)
  
  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/auth')
  }
  return (
    <Fragment>
      
      <header className={classes.header}>
        <NavLink to ="/home"><span>HOME</span></NavLink>
        <NavLink to ="/store"><span>STORE</span></NavLink>
        <NavLink to ="/about"><span>ABOUT</span></NavLink>
        <NavLink to ="/contact_us"><span>CONTACT US</span></NavLink>
      

        <button className={classes.button} onClick={props.onShowCart}> Cart {number}</button>
        
        <button onClick= {logoutHandler}> Logout </button>
      </header>
      <h1 className={classes.h1}> The Generics </h1>

     
    </Fragment>
  );
};

export default Header;
