import axios from "axios";
import { BASE_URL } from "../BASEURL";

export function set(item) {
  console.log(item.cart);
  axios.patch(`${BASE_URL}/users/1`, item);
}

export function setFromCart(item) {
  console.log(item);
  axios.patch(`${BASE_URL}/users/1`, item);
}

export function setDeleted(item) {
  console.log(item);
  axios.patch(`${BASE_URL}/users/1`, item);
}
