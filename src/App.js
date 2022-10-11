import { useState, useContext, useEffect, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import axios from 'axios'

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import CartProvider from "./store/CartProvider";
import Home from "./components/Homee/Home";
import Contact from "./components/Contact/contact";
import AuthForm from "./components/Authentication/authForm";
import ProductDetail from "./components/Product Detail/ProductDetail";
import AuthContext from "./store/auth-context";
import CartContext from "./store/cart-context";

function App() {
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
  console.log("use effect called")
    axios.get(`https://crudcrud.com/api/ae204094299d4ce3a61d90cb73423523/cart${email}`).then((res) => {
      console.log(res.data)
      res.data.forEach((item) => {
        console.log("Inside get ", item)
        cartCtx.addItem(item);
      })
    }).catch((err) => {
      alert(err)
    })
  }, [])

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

          <Route path="/store/:product_id">
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
