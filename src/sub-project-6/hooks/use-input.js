import { useState } from "react";

const useInput = (validaterFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validaterFn(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => setEnteredValue(event.target.value);

  const inputBlurHandler = () => setIsTouched(true);

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    hasError: hasError,
    value: enteredValue,
    valueIsValid: valueIsValid,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useInput;
