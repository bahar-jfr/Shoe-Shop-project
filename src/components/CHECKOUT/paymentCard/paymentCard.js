import { El } from "../../../utils/shared/El";

export function PaymentCard(item) {
  return El({
    element: "div",
    className: "flex items-center justify-between gap-3 p-5 rounded-2xl shadow-lg",
    children: [

      El({
        element: "div",
        className: "flex gap-2",
        children: [
          El({
            element: "div",
            innerHTML: item.icon,
          }),
          El({
            element: "p",
            className: "text-md font-bold",
            innerText: item.name,
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex items-center gap-3",
        children: [
          El({
            element: "div",
            className: "text-xmd font-bold",
            innerText: item.price,
          }),
          El({
            element: "input",
            className: " accent-black w-5 h-5",
            type: "radio",
          }),
        ],
      }),
    ],
  });
}
