import axios from "axios";
import { BASE_URL } from "../BASEURL";

export function set(item) {
 
  axios.patch(`${BASE_URL}/users/1`, item);
}

export function setFromCart(item) {

  axios.patch(`${BASE_URL}/users/1`, item);
}

export function setDeleted(item) {

  axios.patch(`${BASE_URL}/users/1`, item);
}
export function setWish(item) {
  axios.patch(`${BASE_URL}/users/1`, item);
}