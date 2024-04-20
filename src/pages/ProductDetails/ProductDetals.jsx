import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  async function downloadDetails() {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProductDetails(response.data);
  }

  useEffect(() => {
    downloadDetails(id);
  }, []);

  return (
    productDetails && (
      <div className="product-details-wrapper">
        <div className="details-divider">
          <div className="details-image">
            <img
              src={productDetails.image}
              alt="product-image"
              id="product-img"
            />
          </div>
          <div className="product-details-box">
            <div id="productDetails">
              <div className="product-name" id="product-name">
                {productDetails.title}
              </div>
              <div className="product-price " id="product-price">
                {productDetails.price}
              </div>
              <div className="product-description">
                <div className="product-description-title ">Description</div>
                <div
                  className="product-description-data"
                  id="product-description-data"
                >
                  {productDetails.description}
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
    )
  );
}

export default ProductDetails;
