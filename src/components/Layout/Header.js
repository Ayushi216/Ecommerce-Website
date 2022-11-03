import React, { Fragment, useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const history = useHistory();
  const [quantity, setQuantity] = useState(0)


  
 useEffect(() => {
    setQuantity(cartCtx?.items?.length || 0) 
  },[cartCtx.items])


  const logoutHandler = () => {
    authCtx.logout();

    history.replace("/auth");
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink to="/home">
          <span>HOME</span>
        </NavLink>
        {authCtx.isLoggedIn && (<NavLink to="/store">
          <span>STORE</span>
        </NavLink>
        )}
        <NavLink to="/about">
          <span>ABOUT</span>
        </NavLink>
        <NavLink to="/contact_us">
          <span>CONTACT US</span>
        </NavLink>

        <button className={classes.button} onClick={props.onShowCart}>
          Cart {quantity}
        </button>

        <button onClick={logoutHandler}> Logout </button>
      </header>
      <h1 className={classes.h1}> The Generics </h1>
    </Fragment>
  );
};

export default Header;
