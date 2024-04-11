import axios from "axios";
import { BASE_URL } from "../BASEURL";

export async function getProducts() {
  const res = await axios.get(BASE_URL);
  return res;
}
