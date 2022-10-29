import { useState, useContext, useEffect, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import axios from 'axios'

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
  
  if(!localStorage.getItem('email')) {
    localStorage.setItem("email","")
  }
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

    let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  const [cartisShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

 useEffect(() => {
    cartCtx.emptyCart();
    axios.get(`https://crudcrud.com/api/872c3caf3c234aabb4f688be09d3889e/cart${email}`).then((res) => {
      console.log(res.data)
      res.data.forEach((item) => {
        cartCtx.addItem(item);
      })
    }).catch((err) => {
      alert(err)
    })
  }, [ email])

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
