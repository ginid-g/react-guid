import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowModal} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Banner image" />
      </div>
    </>
  );
}

export default Header;
