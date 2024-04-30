import axios from "axios";
import { getCartByUser } from "../apis/fakeStoreApis";
export async function fetchCart(id, setCart) {
  const url = getCartByUser(id);
  const response = await axios.get(url);
  // console.log(response.data);
  setCart(response.data[0]);
}
