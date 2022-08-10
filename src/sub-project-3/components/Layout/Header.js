import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Banner image" />
      </div>
    </>
  );
}

export default Header;
