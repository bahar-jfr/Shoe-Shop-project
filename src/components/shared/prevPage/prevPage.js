import { Router } from "../../../routes/routes";
import { El } from "../../../utils/shared/El";

export function PrevPage(title = "", route) {
  return El({
    element: "div",
    className: "flex items-center py-4",
    children: [
      El({
        element: "div",
        eventListener: [
          {
            event: "click",
            callback: () => Router().navigate(`/${route}`),
          },
        ],
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
          "text-lg pl-3 font-semibold w-fit text-blue_tangaroa flex items-center",
        innerText: title,
      }),
    ],
  });
}
