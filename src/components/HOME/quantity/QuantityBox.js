import { El } from "../../../utils/shared/El";

export function QuantityBox(){
    return   El({
        element: "div",
        className:"flex items-center gap-5 bg-medium_gray text-blue_tangaroa font-bold px-6 py-2.5 rounded-3xl ",
        children: [
          El({
            element: "span",
            className: "text-lg cursor-pointer",
            innerText: "-",
          }),
          El({
            element: "span",
            innerText: "2",
          }),
          El({
            element: "span",
            className: "text-lg cursor-pointer",
            innerText: "+",
          }),
        ],
      })
}