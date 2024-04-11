import { El } from "../../../utils/shared/El";

export function PrevPage(title = "") {
  return El({
    element: "div",
    className: "flex items-center py-3",
    children: [
      El({
        element: "div",
        children: [
          El({
            element: "img",
            className: "",
            src: "./src/assets/icons/arrow-left-short.svg",
          }),
        ],
      }),
      El({
        element: "p",
        className:
          "text-xl pl-3   font-semibold w-fit h-8 text-blue_tangaroa flex items-center",
        innerText: title,
      }),
    ],
  });
}
