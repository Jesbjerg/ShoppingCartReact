import axios from "axios";

const BASE_PATH = "https://localhost:5001/";

export function getProducts() {
  return axios.get(BASE_PATH + "products");
}
