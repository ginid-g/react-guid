import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return <p>ProductDetail page {params.productId} </p>;
};

export default ProductDetail;
