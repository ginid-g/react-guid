import { useState } from "react";

import CartProvider from "./store/CartProvider";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

  return (
    <CartProvider>
      {showModal && (
        <Cart onHide={hideModalHandler} onOrder={hideModalHandler} />
      )}

      <Header onShowModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default Main;
