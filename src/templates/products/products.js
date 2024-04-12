import { getProducts } from "../../api/get/getProducts";
import { renderProducts } from "../../utils/functions/render/renderProducts";
import { El } from "../../utils/shared/El";

export function products(brand) {
  getProducts().then((res) => {
    const arrayOfData = res.data;
    const filteredProducts = arrayOfData.filter((item) => item.brand === brand);
    renderProducts(filteredProducts, "brandProducts");
  });
  return El({
    element: "div",
    className: "flex flex-wrap gap-4 overflow-hidden pb-12 pt-2",
    id: "brandProducts",
  });
}
