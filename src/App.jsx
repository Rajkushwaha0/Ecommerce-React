//library
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
//component
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
//context
import UserContext from "./context/UserContext.js";
import CartContext from "./context/CartContext.js";
//routes
import MainRoutes from "./routes/MainRoutes";
//css
import "./App.css";
import { fetchCart } from "./helper/fetchUserCard.js";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [token, setToken] = useCookies(["jwt-token"]);

  async function handleToken() {
    const res = await axios.get("http://localhost:8765/accesstoken", {
      withCredentials: true,
    });

    setToken("jwt-token", res.data.token, { httpOnly: true });
    const toeknDetails = jwtDecode(res.data.token);
    setUser({ username: toeknDetails.user, id: toeknDetails.id });
  }

  async function load() {
    if (!user) {
      await handleToken();
    }
    if (user) {
      await fetchCart(user.id, setCart);
    }
  }
  useEffect(() => {
    load();
  }, [user]);

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
