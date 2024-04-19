import { El } from "../../../utils/shared/El";

export function ChooseCard(item) {
  return El({
    element: "div",
    className: "flex items-center gap-3 p-5 rounded-2xl shadow-lg",
    children: [
      El({
        element: "div",
        className:
          "bg-black w-14 h-14 rounded-full flex items-center justify-center mr-1",
        children: [
              El({
                element: "div",
                innerHTML: item.icon,
              }),
        ],
      }),
      El({
        element: "div",
        className: "flex flex-col gap-2",
        children: [
          El({
            element: "p",
            className: "text-md font-bold",
            innerText: item.name,
          }),
          El({
            element: "p",
            className: "text-dark_gray text-sm ",
            innerText: item.detail,
          }),
        ],
      }),
El({
    element:"div",
    className: "flex items-center gap-3",
    children:[
        El({
            element:"div",
            className:"text-xmd font-bold",
            innerText:item.price
          }),
          El({
            element: "input",
            className: " accent-black w-5 h-5",
            type: "radio",
          }),
    ]
})
    ],
  });
}
