import "./ProductDetails.css";
import { Link } from "react-router-dom";
function ProductDetails({ img }) {
  return (
    <div className="product-details-wrapper">
      <div className="details-divider">
        <div className="details-image">
          <img
            src="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/6257ec77a5eb90b45167d7b1_607ec34ab018c9feb781d314_5.jpeg"
            alt="product-image"
            id="product-img"
          />
        </div>
        <div className="product-details-box">
          <div id="productDetails">
            <div className="product-name" id="product-name">
              Something
            </div>
            <div className="product-price " id="product-price">
              1200
            </div>
            <div className="product-description">
              <div className="product-description-title ">Description</div>
              <div
                className="product-description-data"
                id="product-description-data"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                corrupti molestias vero maxime, rerum tempore mollitia debitis
                exercitationem eum suscipit facere assumenda consectetur
                possimus accusantium? Nesciunt molestias omnis animi optio!
              </div>
            </div>
          </div>
          <div className="product-details-action btn btn-primary text-decoration-non">
            Add to cart
          </div>
          <div
            id="goToCartBtn"
            className="product-details-action btn btn-warning text-decoration-none"
          >
            <Link
              to={"/cart"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Go to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
