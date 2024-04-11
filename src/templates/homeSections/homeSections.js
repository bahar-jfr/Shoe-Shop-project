import { getProducts } from "../../api/get/getProducts";
import { BrandLogo } from "../../components/HOME/brandLogo/brandLogo";
import { FormInput } from "../../components/shared/formInput/formInput";
import { renderAllProducts } from "../../utils/functions/render/renderAllProducts";
import { El } from "../../utils/shared/El";

export function homeSections() {
  getProducts().then((res) => {
    renderAllProducts(res.data);
  });
  return El({
    element: "div",
    className: "flex flex-col",
    children: [
      FormInput("Search", "Empty"),
      El({
        element: "div",
        className:
          " grid grid-cols-4 grid-rows-2 gap-x-10 gap-y-7 px-2 py-3 mt-2",
        children: [
          BrandLogo("Nike", 1, 2, 1, 2),
          BrandLogo("Adidas", 2, 3, 1, 2),
          BrandLogo("Puma", 3, 4, 1, 2),
          BrandLogo("Asics", 4, 5, 1, 2),
          BrandLogo("Reebok", 1, 2, 2, 3),
          BrandLogo("New Balance", 2, 3, 2, 3),
          BrandLogo("Converse", 3, 4, 2, 3),
          BrandLogo("More .. ", 4, 5, 2, 3),
        ],
      }),
      El({
        element: "div",
        className:"flex flex-wrap gap-4 overflow-hidden mb-10 pb-12",
        id: "cardContainer",
      }),
    ],
  });
}
