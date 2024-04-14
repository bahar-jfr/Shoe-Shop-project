import { getProducts } from "../../../api/get/getProducts";
import { Router } from "../../../routes/routes";
import { productInfo } from "../../../templates/productInfo/productInfo";

export function showSingelProduct(id) {
  getProducts().then((res) => {
    const arrayOfData = res.data;
    const singelData = arrayOfData.find((item) => item.id == id);
    document.getElementById("singelPage").append(productInfo(singelData));
});
  Router().navigate("/singelproduct");
}
