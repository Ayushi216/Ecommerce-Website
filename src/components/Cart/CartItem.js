import CartContext from "../../store/cart-context";
import { Fragment, useContext } from "react";
import classes from './CartItem.module.css'

import React from "react";

const CartItem = (props) => {
  const cartCntx = useContext(CartContext);
  const onAddHandler = () => {
    console.log(props)
    cartCntx.addItem(props)
  };


return (
    <li id={`cart-item-${props.id}`}>
      <Fragment>
          <h2 className={classes.title}>{props.title}</h2>
          <img src= {props.img } alt="Icon" className={classes.img}></img>
          <span> ${props.price}</span>
          <button onClick={onAddHandler} className={classes.button}>+</button>
      </Fragment>
    </li>
)

};

export default CartItem;