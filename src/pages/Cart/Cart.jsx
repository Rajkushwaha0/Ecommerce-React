import OrderDetailsProduct from "../../components/OrderDetailsProduct/OrderDetailsProduct";
import "./Cart.css";
import { useParams } from "react-router-dom";
import useCart from "../../hooks/useCart";

function Cart() {
  const { userId } = useParams();
  const [cart, setCart] = useCart(userId);
  return (
    <div className="container">
      <div className="row">
        <h2 className="cart-title text-center">Your cart</h2>
        <div className="cart-wrapper d-flex flex-row">
          <div className="order-details d-flex flex-column" id="orderDetails">
            <div className="order-details-title fw-bold">Order Details</div>
            {/* {products.length > 0 &&
              products.map((product) => (
                <OrderDetailsProduct
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  quantity={product.quantity}
                  onRemove={() => onProductUpdate(product.id, 0)}
                />
              ))} */}
            <OrderDetailsProduct />
            <OrderDetailsProduct />
            <OrderDetailsProduct />
            <OrderDetailsProduct />
            <OrderDetailsProduct />
          </div>

          <div className="price-details d-flex flex-column" id="priceDetails">
            <div className="price-details-box">
              <div className="price-details-title fw-bold">Price Details</div>
              <div className="price-details-data">
                <div className="price-details-item d-flex flex-row justify-content-between">
                  <div>Price</div>
                  <div id="total-price"></div>
                </div>
                <div className="price-details-item d-flex flex-row justify-content-between">
                  <div>Discount</div>
                  <div>10</div>
                </div>
                <div className="price-details-item d-flex flex-row justify-content-between">
                  <div>Delivery Charges</div>
                  <div>FREE</div>
                </div>
                <div className="price-details-item d-flex flex-row justify-content-between">
                  <div>Total</div>
                  <div id="net-price"></div>
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
              <a
                href="/"
                className="checkout-btn btn btn-primary text-decoration-none"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
