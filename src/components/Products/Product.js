import React, { Fragment, useContext } from "react";
import classes from "./Product.module.css";
import CartContext from "../../store/cart-context";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    //const quantity = document.getElementById("amount_" + props.id).value;

    cartCtx.addItem({ ...props.item });
    console.log(cartCtx);
  };
  return (
    <Fragment>
      
      <li className={classes.list}>
        <div>
          <h3>{props.title}</h3>
          <img src={props.image} alt="some images"></img>
          <span>
            <h1>${props.price}</h1>
            <button className={classes.button1} onClick={addItemToCart}>
              Add To Cart
            </button>
          </span>
        </div>
      </li>
    </Fragment>
  );
};

export default Product;
