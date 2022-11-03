import React, { Fragment, useContext } from "react";
import classes from "./Product.module.css";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  


  const addItemToCart = (event) => {
   
    event.preventDefault();
    cartCtx.addItem({ ...props, quantity: props.quantity });

    

    
  };
  return (
    <Fragment>
      <li className={classes.list}>
        <Link to={`/products/${props.id}`}>
          <div className={classes.div}>
            <h3>{props.title}</h3>
            <img src={props.image} alt="some images"></img>
            <span>
              <h1>${props.price}</h1>

              <button className={classes.button1} onClick={addItemToCart}>
                Add To Cart
                
              </button>
            

            </span>
          </div>
        </Link>
      </li>
    </Fragment>
  );
};

export default Product;
