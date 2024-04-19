import { get } from "../../api/get/get";
import { ScrollBar } from "../../components/shared/scrollBar/scrollBar";
import { filterBrand } from "../../utils/functions/filterBrand/filterBrand";
import { renderWhishList } from "../../utils/functions/render/renderWhishList";
import { El } from "../../utils/shared/El";

export function whishListSection() {
  get("users").then((res) => {
    renderWhishList(res.data[0].wishlist, "whishListItems");
  });

  return El({
    element: "div",
    children: [
      El({
        element: "div",
        eventListener:[
          {
            event: "click",
            callback: (e)=> filterBrand(e,"users","black")
          }
        ],
        className:"flex items-center gap-3 overflow-y-hidden no-scrollbar pb-5",
        children:[
          ScrollBar("All","black"),
          ScrollBar("Nike","black"),
          ScrollBar("Adidas","black"),
          ScrollBar("Puma","black"),
          ScrollBar("Asics","black"),
          ScrollBar("Reebok","black"),
          ScrollBar("NewBalance","black"),
          ScrollBar("Converse","black"),

        ]
      }),
      El({
        element: "div",
        className: "flex flex-wrap gap-4 overflow-hidden mb-10 pb-12 pr-6",
        id: "whishListItems",
      }),
    ],
  });
}
