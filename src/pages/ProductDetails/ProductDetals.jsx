//library
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
//css
import "./ProductDetails.css";
//context
import CartContext from "../../context/CartContext";
import UserContext from "../../context/UserContext";
import { addProductToUserCart } from "../../apis/fakeStoreApis";
function ProductDetails() {
  const { id } = useParams();
  const navigator = useNavigate();
  const [productDetails, setProductDetails] = useState({});
  const { setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  async function downloadDetails() {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProductDetails(response.data);
  }

  async function onAddingProduct() {
    if (!user) return;
    const res = await axios.put(addProductToUserCart(), {
      userId: user.id,
      productId: id,
    });
    setCart({ ...res.data });
    navigator(`/cart/${user.id}`);
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
            <div
              onClick={onAddingProduct}
              className="product-details-action btn btn-primary text-decoration-non"
            >
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
