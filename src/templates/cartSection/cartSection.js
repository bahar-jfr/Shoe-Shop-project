import { get } from "../../api/get/get";
import { Button } from "../../components/shared/button/button";
import { renderCartItems } from "../../utils/functions/render/renderCartItems";
import { El } from "../../utils/shared/El";

export  function cartSection() {
    get("users").then((res) => {
    renderCartItems(res.data[0].cart, "cartItems");
  });

  return El({
    element: "div",
    className:"mb-44",
    children: [
      El({
        element: "div",
        className: "flex flex-col gap-6",
        id: "cartItems",
      }),
      El({
        element: "div",
        className: "flex items-center gap-8 justify-center fixed w-full left-1/2 -translate-x-1/2 bottom-15 bg-white py-6 border-t-2 border-gray rounded-t-3xl",
        children: [
          El({
            element: "div",
            className: "flex flex-col gap-2",
            children: [
              El({
                element: "p",
                className: "text-blue_tangaroa text-s",
                innerText: "Total price",
              }),
              El({
                element: "p",
                id: "totalPriceCart",
                className: "text-lg font-bold text-blue_tangaroa",
                innerText: 0,
              }),
            ],
          }),
          El({
            element: "div",
            className:"w-4/6 rounded-xxl shadow-xl ",
            children: [
              Button(
                "Checkout",
                "Checkout",
                false,
                "black",
                "xl",
                "arrow",
                "none",
                "check",
                ""
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
