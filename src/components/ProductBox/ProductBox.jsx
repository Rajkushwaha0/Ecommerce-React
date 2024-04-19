import { Link } from "react-router-dom";

// CSS imports
import "./ProductBox.css";
function ProductBox({ productImage, name, price, productId }) {
  return (
    <Link to={`/product/${productId}`}>
      <div className="product-item">
        <div className="product-img">
          <img src={productImage} alt="" />
        </div>
        <div className="product-name">{name}</div>
        <div className="product-price">&#8377; {price}</div>
      </div>
    </Link>
  );
}

export default ProductBox;
