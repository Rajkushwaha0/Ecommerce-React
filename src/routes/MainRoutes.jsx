import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import ProductList from "../pages/ProductList/PoductList";
import ProductDetails from "../pages/ProductDetails/ProductDetals";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default MainRoutes;
