import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Product";

function App() {

  const [cartisShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <div>
       {cartisShown && <Cart onClose={hideCartHandler}/>}
      <Header  onShowCart={showCartHandler}/>
      <main>
        <Products />
      </main>
      
    </div>
  );
}

export default App;
