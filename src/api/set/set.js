import axios from "axios";
import { BASE_URL } from "../BASEURL";

export function set(item) {
  axios.patch(`${BASE_URL}/users/1`, item);
}
