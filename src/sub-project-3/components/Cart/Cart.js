import { useContext } from "react";

import CartContext from "../../store/cart-context";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem/CartItem";

function Cart(props) {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addHandler = (item) => {
    cartContext.addItem(item);
  };

  const cartItems = cartContext.items.map((item) => (
    <CartItem
      key={item.id}
      price={item.price}
      amount={item.amount}
      name={item.name}
      onRemove={() => removeHandler(item.id)}
      onAdd={() => addHandler(item)}
    />
  ));

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        {hasItems && (
          <button className={classes["button "]} onClick={props.onOrder}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
