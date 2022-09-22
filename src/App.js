import { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import CartProvider from "./store/CartProvider";
import Home from "./components/Homee/Home";
import Contact from "./components/Contact/contact";
import AuthForm from "./components/Authentication/authForm";
import ProductDetail from "./components/Products/ProductDetail";
import AuthContext from "./store/auth-context";


function App() {
  const authCtx = useContext(AuthContext);

  const [cartisShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartisShown && <Cart onClose={hideCartHandler} />} 

      {authCtx.isLoggedIn && <Header onShowCart={showCartHandler} />}
      <main>
        <Switch>
        <Route path="/" exact>
            <AuthForm />
          </Route>
          <Route path="/auth">
            <AuthForm />
          </Route>
          <Route path="/store" exact>
            <Products />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/contact_us">
            <Contact />
          </Route>

          <Route path="/store/:product_id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </CartProvider>
  );
}

export default App;
