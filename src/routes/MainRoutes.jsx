//library
import { Routes, Route } from "react-router-dom";

//pages import
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import ProductList from "../pages/ProductList/PoductList";
import ProductDetails from "../pages/ProductDetails/ProductDetals";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import Cart from "../pages/Cart/Cart";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/cart/:userId" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default MainRoutes;
