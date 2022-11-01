import { useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

 export const CartProvider = (props) => {
  
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {

    setItems([...items, item]);
    console.log("Adding", item);
    console.log("Adding items", items);
  };

  const removeItemHandler = (id) => {
    let itemToRemove = items.findIndex((item) => item.id === id);
    const i = [...items];
    const updatedItems = i.splice(itemToRemove, 1);
    console.log(itemToRemove, i, updatedItems);

    setItems(i);

    axios.delete(
      `https://crudcrud.com/api/52d21fb54c1d4f44a1bba65c9a346029/cart${email}/${id}`
    );
  };

  const emptyCartHandler = () => {
    setItems([]);
  }

  const initializeCartHandler = (items) => {
    setItems(items)

  }
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
    emptyCart: emptyCartHandler,
    initilizeCart: initializeCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
