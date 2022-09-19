import React, {useContext} from "react";

import Modal from "../UI/Modal";

import classes from './Cart.module.css'
import CartItem from "./CartItem";

import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  let totalAmount = 0;
  cartCntx?.items?.forEach((items) => {
    totalAmount = totalAmount + items.price;
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx?.items?.map((item) => (
        <li>
          <CartItem key={item.id} id= {item.id} img={item.img} title={item.title} quantity={item.quantity} price={item.price} />
        </li>
      ))}
    </ul>
  );


  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <h2 className={classes.cart}> CART </h2>
        <button classname={classes.cancel} onClick={props.onClose}> x </button>
      </section>
      <div className={classes.div}>
        <span> ITEM </span>
        <span> PRICE </span>
        <span> QUANTITY </span>
      </div>
      {cartItems}
      <h2 className={classes.h2}> Total ${totalAmount} </h2>

      <button className={classes.button}>PURCHASE </button>
    </Modal>
  );
};

export default Cart;
