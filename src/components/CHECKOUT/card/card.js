import { El } from "../../../utils/shared/El";

export function Card(item){
  return El({
    element: "div",
    className: "flex items-center p-5 shadow-lg rounded-4xl gap-5",
    children: [
      El({
        element: "img",
        className: "h-32 w-32 rounded-2xl",
        src: item.imageURL,
      }),
      El({
        element: "div",
        className: "flex flex-col w-full gap-3.5 ",
        children: [
          El({
            element: "div",
            id: item.id,
            className: "flex justify-between items-center",
            children: [
              El({
                element: "p",
                className: "text-xmd font-semibold truncate w-40",
                innerText: `${item.name}`,
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex items-center",
            children: [
              // color
              El({
                element: "span",
                innerText: "|",
              }),
              El({
                element: "span",
                innerText: `size = `,
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-between items-center",
            children: [
              El({
                element: "span",
                id: `price${item.id}`,
                className: "text-xmd font-semibold",
                innerText: `${item.totalPrice}`,
              }),
           El({
            element:"div",
            className:"flex items-center justify-center bg-gray h-10 w-10 rounded-full",
            innerText:`${item.quantity}`
           })
            ],
          }),
        ],
      }),
    ],
  });
}