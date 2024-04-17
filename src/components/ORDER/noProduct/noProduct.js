import { El } from "../../../utils/shared/El";

export function NoProduct() {
  return El({
    element: "div",
    className:"flex items-center justify-center pt-24",
    children: [
      El({
        element: "div",
        className: "flex flex-col items-center  gap-5",
        children: [
          El({
            element: "img",
            className: "h-64",
            src: "./src/assets/images/noproduct.png",
          }),

          El({
            element: "p",
            className: "text-xmd font-semibold",
            innerText: "You don't have an order yet",
          }),
          El({
            element: "p",
            innerText: "You don't have an active orders at this time ",
          }),
        ],
      }),
    ],
  });
}
