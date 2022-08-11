import { useContext } from "react";

import CartContext from "../../../store/cart-context";

import CartIcon from "../../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const cartContext = useContext(CartContext);

  const items = cartContext.items.map((x) => x.amount);

  const numberOfItems = items.reduce((a, b) => {
    return a + b;
  }, 0);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
