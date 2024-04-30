import { useEffect, useContext } from "react";
import axios from "axios";
import CartContext from "../context/CartContext";
import { getCartByUser } from "../apis/fakeStoreApis";

function useCart(userId) {
  const { cart, setCart } = useContext(CartContext);

  async function fetchCart(id) {
    const url = getCartByUser(id);
    const response = await axios.get(url);
    // console.log(response.data);
    setCart(response.data[0]);
  }
  useEffect(() => {
    fetchCart(userId);
  }, [userId]);

  return [cart, setCart];
}

export default useCart;
