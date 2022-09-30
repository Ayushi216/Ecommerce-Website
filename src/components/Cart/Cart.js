import React, { useContext  } from "react";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import CartContext from "../../store/cart-context";
//import axios from "axios";

const Cart = (props) => {
  //let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  const cartCntx = useContext(CartContext);
  console.log("Items of Cart", cartCntx.items)

 
  let totalAmount = 0;
  cartCntx?.items?.forEach((items) => {
    totalAmount = totalAmount + items.price;
  });

  /*useEffect(() => {
    axios.get(`https://crudcrud.com/api/247852e62d47417e860f34c644fb5ae9/cart${email}`).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      alert(err)
    })
  }, [])*/



  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx?.items?.map((item) => (
        <li>
          <CartItem
            key={item.id}
            id={item.id}
            img={item.image}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <section className={classes.section}>
        <h2 className={classes.cart}> CART </h2>
        <button className={classes.cancel} onClick={props.onClose}>
          
          x
        </button>
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
