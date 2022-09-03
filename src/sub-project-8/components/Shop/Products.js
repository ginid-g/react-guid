import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: "p1",
    title: "My first book",
    price: 50,
  },
  {
    id: "p2",
    title: "My Second book",
    price: 150,
  },
];

const Products = (props) => {
  const productList = products.map((pro) => {
    return (
      <ProductItem
        key={pro.id}
        id={pro.id}
        title={pro.title}
        price={pro.price}
        description="This is a first product - amazing!"
      />
    );
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;
