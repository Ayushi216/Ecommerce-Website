import React, { useContext, useEffect } from "react";
import Product from "./Product";
import CartContext from "../../store/cart-context";
import axios from "axios";
const AvailableProducts = () => {
  const cartCtx = useContext(CartContext);
  const productsArr = [
    {
      id: "1",

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "2",

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "3",

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "4",

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/ea33e6a605ea42f98b07f6d95b38c0a6/cart${email}`
      ).then((res) => {
          cartCtx.initilizeCart(res.data);
          
      })
      
        
  },[]);

  return (
    <section>
      <ul>
        {productsArr.map((prod) => {
          return (
            <Product
              
              key={Math.random()}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              image={prod.imageUrl}
              quantity= {1}
              _id= {prod._id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableProducts;
