import React, { Fragment, useContext, useEffect } from "react";
import classes from "./Product.module.css";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  /*useEffect(() => {
    axios.get(`https://crudcrud.com/api/ae204094299d4ce3a61d90cb73423523/cart${email}`).then((res) => {
      console.log(res.data)
      res.data.forEach((item) => {
        console.log("Inside get ", item)
        cartCtx.addItem(item);
      })
    }).catch((err) => {
      alert(err)
    })
  }, [])*/

  const addItemToCart = (event) => {
    event.preventDefault();

    cartCtx.addItem({ ...props });

    axios
      .post(
        `https://crudcrud.com/api/ae204094299d4ce3a61d90cb73423523/cart${email}`,
        props
      )
      .then((res) => {
        console.log(res.data, "Successfull");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <Fragment>
      <li className={classes.list}>
        <Link to={`/store/${props.id}`}>
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
