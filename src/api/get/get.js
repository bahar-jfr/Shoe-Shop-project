import axios from "axios";
import { BASE_URL } from "../BASEURL";

export async function get(endpoint) {
  const res = await axios.get(`${BASE_URL}/${endpoint}`);
  return res;
}
