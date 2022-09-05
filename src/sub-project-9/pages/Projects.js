import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>This is products page</h1>
      <ul>
        <li>
          <NavLink to="/products/1">A Capet</NavLink>
        </li>
        <li>
          <NavLink to="/products/2">A Table</NavLink>
        </li>
        <li>
          <NavLink to="/products/3">A online course</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Products;
