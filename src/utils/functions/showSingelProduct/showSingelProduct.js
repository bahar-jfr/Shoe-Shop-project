import { get } from "../../../api/get/get";
import { Router } from "../../../routes/routes";
import { productInfo } from "../../../templates/productInfo/productInfo";

export function showSingelProduct(id) {
  get("products").then((res) => {
    const arrayOfData = res.data;
    const singelData = arrayOfData.find((item) => item.id == id);
    document.getElementById("singelPage").append(productInfo(singelData));
  });
  Router().navigate("/singelproduct");
}
