import { QuantityBox } from "../../components/HOME/quantity/QuantityBox";
import { Button } from "../../components/shared/button/button";
import { PrevPage } from "../../components/shared/prevPage/prevPage";
import { viewText } from "../../utils/functions/viewText/viewText";
import { El } from "../../utils/shared/El";

export function singelProduct() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className: "",
        children: [
          El({
            element: "span",
            className: "fixed p-6",
            children: [PrevPage()],
          }),
          El({
            element: "img",
            className: "w-full",
            src: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-6 py-8",
        children: [
          El({
            element: "div",
            className: "flex",
            children: [
              El({
                element: "div",
                className: "flex flex-col gap-3 pb-4",
                children: [
                  El({
                    element: "h2",
                    className: "text-xl font-bold text-blue_tangaroa",
                    innerText: "Running Sportwear",
                  }),
                  El({
                    element: "div",
                    className: "flex items-center gap-2",
                    children: [
                      El({
                        element: "div",
                        className:
                          "flex items-center text-xs bg-medium_gray text-blue_tangaroa px-2 py-1 mr-1  rounded-md",
                        innerText: "5.371 sold",
                      }),
                      El({
                        element: "div",
                        innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#212529" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.978.978 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="#212529" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.028 1.028 0 0 0-.897.495"/></svg>`,
                      }),
                      El({
                        element: "span",
                        className: "text-blue_tangaroa text-sm",
                        innerText: "4.3 (5,389 reviews)",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "hr",
            className: "text-medium_gray",
          }),
          El({
            element: "div",
            className: "flex flex-col gap-6 py-4",
            children: [
              El({
                element: "div",
                children: [
                  El({
                    element: "p",
                    className: "text-md font-bold text-blue_tangaroa pb-1",
                    innerText: "Description",
                  }),
                  El({
                    element: "p",
                    className: "text-sm text-blue_tangaroa line-clamp-4",
                    innerHTML:
                      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus nihil ratione mollitia quas optio <span class='font-semibold' id='viewText'>view more</span> beatae dolores unde. Libero nobis tempore ab maxime, illum eos repellat, corrupti culpa necessitatibus <span class='font-semibold' id='hideText'>view less</span>",
                    eventListener: [
                      {
                        event: "click",
                        callback: (e) => viewText(e),
                      },
                    ],
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex justify-between gap-2",
                children: [
                  El({
                    element: "div",
                    className: "flex flex-col w-full",
                    children: [
                      El({
                        element: "p",
                        className: "text-md font-bold text-blue_tangaroa",
                        innerText: "Size",
                      }),
                      // dynamic size
                    ],
                  }),
                  El({
                    element: "div",
                    className: "flex flex-col w-full",
                    children: [
                      El({
                        element: "p",
                        className: "text-md font-bold text-blue_tangaroa",
                        innerText: "Color",
                      }),
                      // dynamic color
                    ],
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex items-center gap-5",
                children: [
                  El({
                    element: "p",
                    className: "text-md font-bold text-blue_tangaroa",
                    innerText: "Quantity",
                  }),
                  QuantityBox(),
                ],
              }),
            ],
          }),
          El({
            element: "hr",
            className: "text-medium_gray",
          }),
          El({
            element: "div",
            className: "flex items-center gap-10 py-5",
            children: [
              El({
                element: "div",
                className: "flex flex-col gap-2",
                children: [
                  El({
                    element: "p",
                    className: "text-blue_tangaroa text-s",
                    innerText: "Total price",
                  }),
                  El({
                    element: "p",
                    className: "text-lg font-bold text-blue_tangaroa",
                    innerText: "$240.00",
                  }),
                ],
              }),
              Button(
                "Add to Cart",
                "AddToCart",
                false,
                "black",
                "xl",
                "none",
                "basket"
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
