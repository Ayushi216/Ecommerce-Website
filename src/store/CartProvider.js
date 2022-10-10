import { useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

 export const CartProvider = (props) => {
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems([...items, item]);
    console.log("Adding", item);
  };

  const removeItemHandler = (id) => {
    let itemToRemove = items.findIndex((item) => item.id === id);
    const i = [...items];
    const updatedItems = i.splice(itemToRemove, 1);
    console.log(itemToRemove, i, updatedItems);

    setItems(i);

    axios.delete(
      `https://crudcrud.com/api/21eb06cae255450f902224de607507c5/cart${email}/${id}`
    );
  };
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
