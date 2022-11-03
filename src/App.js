import { useState, useContext, useEffect, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";



import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import About from "./components/About/About";

import Home from "./components/Homee/Home";
import Contact from "./components/Contact/contact";
import AuthForm from "./components/Authentication/authForm";
import ProductDetail from "./components/Product Detail/ProductDetail";
import AuthContext from "./store/auth-context";
import CartContext from "./store/cart-context";


function App() {
  const cartCtx= useContext(CartContext)
  
  if(!localStorage.getItem('email')) {
    localStorage.setItem("email","")
  }
  const authCtx = useContext(AuthContext);
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");




  const [cartisShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

 useEffect(() => {
   if (!email) return;
    axios.get(`https://crudcrud.com/api/66ad4bc62ba94bb8937980d9026a5a8f/cart${email}`).then((res) => {
      const data= (res.data)
      for (const key in data) {
        const item = data[key];
        item._id = key;
        cartCtx.mapID(item)
      }
      
    }).catch((err) => {
      alert(err)
    })
  }, [email, cartCtx])

  return (
    <Fragment>
      {cartisShown && <Cart onClose={hideCartHandler} />}

      {authCtx.isLoggedIn && <Header onShowCart={showCartHandler} />}
      <main>
        <Switch>
          <Route path="/" exact>
            <AuthForm />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthForm />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/store" exact>
              <Products />
            </Route>
          )}

          {authCtx.isLoggedIn && (
            <Route path="/about">
              <About />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/home">
              <Home />
            </Route>
          )}
          <Route path="/contact_us">
            <Contact />
          </Route>

          <Route path="/products/:product_id">
            <ProductDetail />
          </Route>

          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </main>
      </Fragment>
  );
}

export default App;
