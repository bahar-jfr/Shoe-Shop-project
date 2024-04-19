import { get } from "../../api/get/get";
import { BrandLogo } from "../../components/HOME/brandLogo/brandLogo";
import { FormInput } from "../../components/shared/formInput/formInput";
import { ScrollBar } from "../../components/shared/scrollBar/scrollBar";
import { Router } from "../../routes/routes";
import { filterBrand } from "../../utils/functions/filterBrand/filterBrand";
import { renderProducts } from "../../utils/functions/render/renderProducts";
import { El } from "../../utils/shared/El";

export function homeSections() {
  get("products").then((res) => {
    renderProducts(res.data, "allProducts");
  });
  return El({
    element: "div",
    className: "flex flex-col",
    children: [
      El({
        element: "div",
        eventListener: [
          {
            event: "click",
            callback: () =>   Router().navigate("/search"),
          },
        ],
        children: [FormInput("Search","searchHome", "Empty")],
      }),
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
        className: "flex flex-col",
        children: [
          El({
            element: "div",
            className:
              "flex items-center justify-between text-blue_tangaroa pt-5",
            children: [
              El({
                element: "p",
                className: "text-xmd font-semibold",
                innerText: "Most PoPular",
              }),
              El({
                element: "p",
                className: "text-md font-semibold",
                innerText: "See All",
              }),
            ],
          }),
          El({
            element: "div",
            eventListener: [
              {
                event: "click",
                callback: (e) =>
                  filterBrand(e, "products", "allProducts"),
              },
            ],
            className:
              "flex items-center gap-3 overflow-y-hidden no-scrollbar pb-5 pt-5",
            children: [
              ScrollBar("All"),
              ScrollBar("Nike"),
              ScrollBar("Adidas"),
              ScrollBar("Puma"),
              ScrollBar("Asics"),
              ScrollBar("Reebok"),
              ScrollBar("NewBalance"),
              ScrollBar("Converse"),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-wrap gap-4 overflow-hidden mb-10 pb-12",
        id: "allProducts",
      }),
    ],
  });
}
