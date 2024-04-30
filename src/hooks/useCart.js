import { useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import { fetchCart } from "../helper/fetchUserCard";

function useCart(userId) {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetchCart(userId, setCart);
  }, [userId]);

  return [cart, setCart];
}

export default useCart;
