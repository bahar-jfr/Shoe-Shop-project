import { El } from "../../../utils/shared/El";

export function Card(imageURL,name ,price) {
  return El({
    element: "div",
    className: "flex flex-col gap-3 w-46",
    children: [
      El({
        element: "img",
        className: "h-46 w-46 rounded-3xl ",
        src: imageURL,
      }),
      El({
        element: "h3",
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
