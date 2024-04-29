import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UserContext from "./context/UserContext.js";
import CartContext from "./context/CartContext.js";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState({ products: [] });
  const [token, setToken] = useCookies(["jwt-token"]);

  useEffect(() => {
    axios
      .get("http://localhost:8765/accesstoken", { withCredentials: true })
      .then((res) => {
        setToken("jwt-token", res.data.token, { httpOnly: true });
        const toeknDetails = jwtDecode(res.data.token);
        setUser({ username: toeknDetails.user, id: toeknDetails.id });
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div>
          <Header color="light" light={true} container="fluid" expand="md" />
          <MainRoutes />
          <Footer />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
