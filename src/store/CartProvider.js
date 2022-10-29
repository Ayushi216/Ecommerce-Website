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
      `https://crudcrud.com/api/8cf8310dc6e64151922e6f8f03366b7c/cart${email}/${id}`
    );
  };

  const emptyCartHandler = () => {
    setItems([]);
  }
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
    emptyCart: emptyCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
