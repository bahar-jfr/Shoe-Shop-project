import { El } from "../../../utils/shared/El";

export function Card(item,text) {
    return El({
      element: "div",
      className: "flex items-center p-5 shadow-lg rounded-4xl gap-5",
      children: [
        El({
          element: "img",
          className: "h-32 w-32 rounded-2xl",
          src: item.image,
        }),
        El({
          element: "div",
          className: "flex flex-col w-full gap-2 ",
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
              className: "flex items-center text-sm",
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
                El({
                    element: "span",
                    innerText: "|",
                  }),
                  El({
                    element: "span",
                    innerText: `Qty = `,
                  })
              ],
            }),
            El({
                element:"div",
                className:"bg-gray text-xs p-2 w-fit rounded-lg font-semibold",
                innerText:"In Delivery"
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
                className:"bg-black text-white px-3 py-1.5 rounded-4xl text-md",
                innerText:text
               })
              ],
            }),
          ],
        }),
      ],
    });
  }
  