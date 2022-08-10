import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <Cart onHide={hideModalHandler} onOrder={hideModalHandler} />
      )}

      <Header onShowModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default Main;
