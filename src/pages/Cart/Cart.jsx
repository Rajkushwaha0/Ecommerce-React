import OrderDetailsProduct from "../../components/OrderDetailsProduct/OrderDetailsProduct";
import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CartContext from "../../context/CartContext";
import { getProduct, updateProductInCart } from "../../apis/fakeStoreApis";
import UserContext from "../../context/UserContext";

//tostify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [items, setItems] = useState([]);

  async function downloadProducts(cart) {
    if (!cart || !cart.products) return;

    const productQuantityMapping = {};
    cart.products.forEach((product) => {
      productQuantityMapping[product.productId] = product.quantity;
    });

    const productPromise = await cart.products.map((product) =>
      axios.get(getProduct(product.productId))
    );
    const fetchedProducts = await axios.all(productPromise);
    const products = fetchedProducts.map((item) => ({
      ...item.data,
      quantity: productQuantityMapping[item.data.id],
    }));
    setItems(products);
  }

  async function onProductUpdate(productId, quantity) {
    if (!user) return;
    const res = await axios.put(updateProductInCart(), {
      userId: user.id,
      productId,
      quantity,
    });
    setCart({ ...res.data });
  }

  useEffect(() => {
    downloadProducts(cart);
    // console.log(items);
  }, [cart]);

  const notify = () => toast("Order placed at your address");
  return (
    <div className="container">
      <div className="row">
        <h2 className="cart-title text-center">Your cart</h2>
        <div className="cart-wrapper d-flex flex-row">
          <div className="order-details d-flex flex-column" id="orderDetails">
            <div className="order-details-title fw-bold">Order Details</div>
            {items.length > 0 &&
              items.map((product) => (
                <OrderDetailsProduct
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  quantity={product.quantity}
                  onRemove={() => onProductUpdate(product.id, 0)}
                />
              ))}
          </div>

          <div className="price-details d-flex flex-column" id="priceDetails">
            <div className="price-details-box">
              <div className="price-details-title fw-bold">Price Details</div>
              <div className="price-details-data">
                <div className="price-details-item d-flex flex-row justify-content-between">
                  <div>Price</div>
                  <div id="total-price">1500</div>
                </div>
                <div className="price-details-item d-flex flex-row justify-content-between">
                  <div>Discount</div>
                  <div>10%</div>
                </div>
                <div className="price-details-item d-flex flex-row justify-content-between">
                  <div>Delivery Charges</div>
                  <div>FREE</div>
                </div>
                <div className="price-details-item d-flex flex-row justify-content-between">
                  <div>Total</div>
                  <div id="net-price">1350</div>
                </div>
              </div>
            </div>
            <div className="price-details-btn-group">
              <a
                href="/product"
                className="continue-shopping-btn btn btn-info text-decoration-none"
              >
                Continue Shopping
              </a>
              <div>
                <a
                  className="checkout-btn btn btn-primary text-decoration-none"
                  onClick={notify}
                >
                  Checkout
                </a>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
