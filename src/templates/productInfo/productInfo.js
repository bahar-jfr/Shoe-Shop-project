import { set } from "../../api/set/set";
import { Color } from "../../components/HOME/color/color";
import { QuantityBox } from "../../components/HOME/quantity/QuantityBox";
import { Size } from "../../components/HOME/size/size";
import { Button } from "../../components/shared/button/button";
import { PrevPage } from "../../components/shared/prevPage/prevPage";
import { Router } from "../../routes/routes";
import { addToCart } from "../../utils/functions/addToCart/addToCart";
import { changeHeartColor } from "../../utils/functions/changeHeartColor/changeHeartColor";
import { viewText } from "../../utils/functions/viewText/viewText";
import { El } from "../../utils/shared/El";

export function productInfo(product) {
  let isFav = false;
  if (product.isFav) {
    const heartIcon = document.getElementById("heartIcon");

    heartIcon.setAttribute("fill", "red");
  }
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
            children: [PrevPage("", "home", "none")],
          }),
          El({
            element: "img",
            className: "w-full",
            src: `${product.imageURL}`,
          }),
        ],
      }),
      El({
        element: "div",
        className: "px-6 py-8",
        children: [
          El({
            element: "div",
            className: "flex items-center justify-between",
            children: [
              El({
                element: "div",
                className: "flex flex-col gap-3 pb-4",
                children: [
                  El({
                    element: "h2",
                    className: "text-xl font-bold text-blue_tangaroa",
                    innerText: `${product.name}`,
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
              El({
                element: "span",
                className: "flex flex-col ",
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      isFav = true;
                      changeHeartColor(product);
                    },
                  },
                ],
                innerHTML: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="heartIcon" d="M19 8.77673C18.7932 8.10613 18.4228 7.47603 17.8547 6.91284C17.4075 6.46941 16.9433 6.17698 16.4776 6M10.3993 4.14593C8.72567 3.08425 6.02273 2.08032 3.68853 4.46071C-1.85248 10.1114 7.64984 21 12 21C16.3501 21 25.8525 10.1114 20.3115 4.46072C17.9773 2.08035 15.2744 3.08427 13.6007 4.14593C12.655 4.74582 11.345 4.74582 10.3993 4.14593Z" stroke="#2D264B" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                `,
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
                      El({
                        element:"div",
                        className:" pt-4 flex items-center gap-3",
                        children:Size(product.sizes)
                      })
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
                      El({
                        element:"div",
                        className:"pt-4 flex items-center gap-3",
                        children:Color(product.colors)
                      })
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
                  QuantityBox(product, "lg"),
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
                    id: `price${product.id}`,
                    className: "text-lg font-bold text-blue_tangaroa",
                    innerText: "$0.00",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "w-full",
                eventListener: [
                  {
                    event: "click",
                    callback: () => addToCart(product, isFav),
                  },
                ],
                children: [
                  Button(
                    "Add to Cart",
                    "AddToCart",
                    false,
                    "black",
                    "white",
                    "3",
                    "xl",
                    "none",
                    "basket"
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
