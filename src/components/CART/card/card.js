import { El } from "../../../utils/shared/El";
import { QuantityBox } from "../../HOME/quantity/QuantityBox";

export function Card(item) {
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
        className: "flex flex-col w-full gap-4",
        children: [
          El({
            element: "div",
            className: "flex justify-between items-center",
            children: [
              El({
                element: "p",
                className: "text-xmd font-semibold",
                innerText: `${item.name}`,
              }),
              El({
                element: "span",
                innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#152536" fill-rule="evenodd" d="M5.117 7.752a.75.75 0 0 1 .798.698l.46 6.9c.09 1.347.154 2.285.294 2.99c.137.685.327 1.047.6 1.303c.274.256.648.422 1.34.512c.714.093 1.654.095 3.004.095h.774c1.35 0 2.29-.002 3.004-.095c.692-.09 1.066-.256 1.34-.512c.273-.256.463-.618.6-1.302c.14-.706.204-1.644.294-2.992l.46-6.899a.75.75 0 1 1 1.497.1l-.464 6.952c-.085 1.282-.154 2.319-.316 3.132c-.169.845-.455 1.551-1.047 2.104c-.591.554-1.315.793-2.17.904c-.822.108-1.86.108-3.145.108h-.88c-1.285 0-2.323 0-3.145-.108c-.855-.111-1.579-.35-2.17-.904c-.592-.553-.878-1.26-1.047-2.104c-.162-.814-.23-1.85-.316-3.132L4.418 8.55a.75.75 0 0 1 .699-.798m5.238-5.502h-.046c-.216 0-.405 0-.583.028a2.25 2.25 0 0 0-1.64 1.183c-.084.16-.143.339-.211.544l-.015.044l-.097.29a1.25 1.25 0 0 1-1.263.91h-3a.75.75 0 1 0 0 1.501h17.001a.75.75 0 0 0 0-1.5H17.41a1.25 1.25 0 0 1-1.173-.91l-.097-.291l-.014-.044c-.069-.205-.128-.384-.211-.544a2.25 2.25 0 0 0-1.641-1.183a3.733 3.733 0 0 0-.583-.028h-.046zm-1.21 2.685c-.04.109-.085.214-.137.315h5.984a2.764 2.764 0 0 1-.136-.314l-.04-.114l-.099-.3a3.114 3.114 0 0 0-.133-.368a.75.75 0 0 0-.547-.395a3.114 3.114 0 0 0-.392-.009h-3.29c-.288 0-.348.002-.392.01a.75.75 0 0 0-.547.394c-.02.04-.042.095-.133.369l-.1.3z" clip-rule="evenodd"/></svg>`,
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
              QuantityBox(item, "md", item.quantity),
            ],
          }),
        ],
      }),
    ],
  });
}
