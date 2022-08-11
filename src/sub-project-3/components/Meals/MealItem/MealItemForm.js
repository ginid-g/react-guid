import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = amountInputRef.current.value;
    const enterAmountNumber = +enterAmount;

    props.onAddToCart(enterAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        type="number"
        id={"amount_" + props.id}
        min="1"
        max="5"
        step="1"
        defaultValue="1"
        ref={amountInputRef}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
