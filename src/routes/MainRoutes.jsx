import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";

function MainRoutes() {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Error />} />
  </Routes>;
}

export default MainRoutes;
