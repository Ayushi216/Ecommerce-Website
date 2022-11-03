import { useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";


 export const CartProvider = (props) => {
  
 let email = localStorage.getItem("email").replace(".", "").replace("@", "");
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {

    //setItems([...items, item]);

    let arr=[...items];
    let flag= false;
    items.forEach((element, index) => {

      console.log(items)
      if (element.id === item.id) {

        arr[index].quantity=Number(item.quantity)+Number(arr[index].quantity);
        flag=true;
        console.log(arr[index]);
        /*axios
      .patch(
        `https://crudcrud.com/api/66ad4bc62ba94bb8937980d9026a5a8f/cart${email}/${item._id}`,{
          quantity: item.quantity + 1
        }
    
      )
      .then((res) => {

        console.log(res.data, "Successfull");
      })
      .catch((error) => {
        alert(error);
      });*/

        
        
      } 
    });
    if(flag==false){
      arr.push({...item,quantity:1})
      axios
      .post(
        `https://crudcrud.com/api/66ad4bc62ba94bb8937980d9026a5a8f/cart${email}`, {...item,quantity:1}
      )
      .then((res) => {
        console.log(res.data, "Successfull");
      })
      .catch((error) => {
        alert(error);
      });

    }
    setItems(arr);

  };
  

  const removeItemHandler = (id) => {
    let itemToRemove = items.findIndex((item) => item.id === id);
    const i = [...items];
    const updatedItems = i.splice(itemToRemove, 1);
    console.log(itemToRemove, i, updatedItems);
    

    setItems(i);

    
  };

  const emptyCartHandler = () => {
    setItems([]);
  }

  const initializeCartHandler = (items) => {
    setItems(items)

  }

  const mapIDHandler = (id) => {
    items.id= id;
  }
  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
    emptyCart: emptyCartHandler,
    initilizeCart: initializeCartHandler,
    mapID: mapIDHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
