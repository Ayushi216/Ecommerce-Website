import { useState } from "react";
import { Route } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import CartProvider from "./store/CartProvider";
import Home from "./components/Homee/Home";

function App() {
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
      <Header onShowCart={showCartHandler} />
      <main>
        <Route path="/store">
          <Products />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
      </main>
    </CartProvider>
  );
}

export default App;
