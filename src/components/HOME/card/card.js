import { showSingelProduct } from "../../../utils/functions/showSingelProduct/showSingelProduct";
import { El } from "../../../utils/shared/El";

export function Card(id, imageURL, name, price) {
  return El({
    element: "div",
    id: `${id}`,
    className: "flex flex-col gap-3 w-46",
    eventListener: [
      {
        event: "click",
        callback: (e) => {
            showSingelProduct(e.currentTarget.id);
        },
      },
    ],
    children: [
      El({
        element: "img",
        className: "h-46 w-46 rounded-3xl ",
        src: imageURL,
      }),
      El({
        element: "h4",
        innerText: name,
        className: "truncate text-blue_tangaroa  font-bold text-lg",
      }),
      El({
        element: "p",
        className: "text-md font-semibold text-blue_tangaroa ",
        innerText: `$ ${price}.00`,
      }),
    ],
  });
}
