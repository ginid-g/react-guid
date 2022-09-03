import classes from "./CartButton.module.css";

import { useDispatch, useSelector } from "react-redux";
import { uiSliceAction } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const clickHandler = () => dispatch(uiSliceAction.toggle());

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
