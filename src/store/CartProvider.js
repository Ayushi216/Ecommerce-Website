import { useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  //const CartCntx = useContext(CartContext);
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    console.log(email);

    setItems([...items, item]);
    console.log("Adding", item);
    axios
      .post(
        `https://crudcrud.com/api/247852e62d47417e860f34c644fb5ae9/cart${email}`,
        item
      )
      .then((res) => {
        console.log(res.data, "Successfull");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const removeItemHandler = (id) => {
    let itemToRemove = items.findIndex((item) => item.id === id);
    const i = [...items];
    const updatedItems = i.splice(itemToRemove, 1);
    console.log(itemToRemove, i, updatedItems);

    setItems(i);

    axios.delete(
      `https://crudcrud.com/api/247852e62d47417e860f34c644fb5ae9/cart${email}/${id}`
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
