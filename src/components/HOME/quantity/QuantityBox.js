import { counter } from "../../../utils/functions/counter/counter";
import { El } from "../../../utils/shared/El";

export function QuantityBox(product, size, num = 0) {
  const quantitySize = { md: "px-4 py-2 ", lg: "px-6 py-2.5" };
  return El({
    element: "div",
    className: `flex items-center bg-medium_gray text-blue_tangaroa font-bold rounded-3xl ${quantitySize[size]}`,
    eventListener: [
      {
        event: "click",
        callback: (e) => counter(e, product),
      },
    ],
    children: [
      El({
        element: "span",
        id: "mines",
        className: `text-${size} cursor-pointer`,
        innerText: "-",
      }),
      El({
        element: "p",
        className: "px-5",
        id: `num${product.id}`,
        innerText: num,
      }),
      El({
        element: "span",
        id: "plus",
        className: `text-${size} cursor-pointer`,
        innerText: "+",
      }),
    ],
  });
}
