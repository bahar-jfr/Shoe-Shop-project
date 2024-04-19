import { get } from "../../api/get/get";
import { ShippingCard } from "../../components/CHECKOUT/shippingCard/shippingCard";
import { Button } from "../../components/shared/button/button";
import { Router } from "../../routes/routes";
import { renderCheckItems } from "../../utils/functions/render/renderCheckItems";
import { El } from "../../utils/shared/El";

export function checkoutSection() {
  return El({
    element: "div",
    className: "pb-10",
    children: [
      El({
        element: "div",
        className: "flex flex-col gap-6 py-5",
        children: [
          El({
            element: "p",
            className: "font-semibold text-xmd ",
            innerText: "Shipping Address",
          }),
          El({
            element: "div",
            id: "shippingItems",
            children: [ShippingCard("Home", "edit")],
            eventListener: [
              {
                event: "click",
                callback: () => Router().navigate("/shippingaddress"),
              },
            ],
          }),
        ],
      }),
      El({
        element: "hr",
        className: "text-gray",
      }),
      El({
        element: "div",
        className: "flex flex-col pb-5",
        children: [
          El({
            element: "p",
            className: "font-semibold text-xmd py-6",
            innerText: "Order List",
          }),
          El({
            element: "div",
            className: "flex flex-col gap-5",
            id: "checkItems",
            children: [
              get("users").then((res) => {
                renderCheckItems(res.data[0], "checkItems");
              }),
            ],
          }),
        ],
      }),
      El({
        element: "hr",
        className: "text-gray",
      }),
      El({
        element: "div",
        children: [
          El({
            element: "p",
            className: "font-semibold text-xmd py-6",
            innerText: "Choose Shipping",
          }),
          El({
            element: "div",
            className:
              "bg-white rounded-2xl flex items-center justify-between p-5 shadow-md mb-5",
            children: [
              El({
                element: "div",
                className: "flex items-center gap-3",
                children: [
                  El({
                    element: "span",
                    innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z"/></svg>`,
                  }),
                  El({
                    element: "p",
                    className: "font-semibold text-md",
                    innerText: "Choose Shipping Type",
                  }),
                ],
              }),
              El({
                element: "span",
                eventListener: [
                  {
                    event: "click",
                    callback: () => Router().navigate("/shippingtype"),
                  },
                ],
                innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="black" d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512L340.864 831.872a30.59 30.59 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"/></svg>`,
              }),
            ],
          }),
        ],
      }),
      El({
        element: "hr",
        className: "text-gray",
      }),
      El({
        element: "div",
        children: [
          El({
            element: "p",
            className: "font-semibold text-xmd pt-6",
            innerText: "Prome Code",
          }),
          El({
            element: "div",
            className: "flex items-center gap-6 py-5 ",
            children: [
              El({
                element: "input",
                className:
                  "bg-light_gray text-dark_gray text-sm rounded-xl w-full p-5 outline-none",
                placeholder: "Enter Prome Code",
              }),
              El({
                element: "span",
                className:
                  " py-2.5 px-4 text-white text-xlg rounded-full bg-black",
                innerText: "+",
              }),
            ],
          }),
          El({
            element: "div",
            className:
              "bg-white shadow-md rounded-xl flex flex-col  p-5 gap-4 mb-8",
            children: [
              El({
                element: "div",
                className: "flex items-center justify-between",
                children: [
                  El({
                    element: "p",
                    className: "text-sm text-dark_gray",
                    innerText: "Amount",
                  }),
                  El({
                    element: "p",
                    className: "w-1/2 flex justify-end",
                    id: "amountPrice",
                    innerText: "$585.00",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex items-center justify-between",
                children: [
                  El({
                    element: "p",
                    className: "text-sm text-dark_gray",
                    innerText: "Shipping",
                  }),
                  El({
                    element: "p",
                    className: "w-1/2 flex justify-end",
                    innerText: "-",
                  }),
                ],
              }),
              El({
                element: "hr",
                className: "text-gray",
              }),
              El({
                element: "div",
                className: "flex items-center justify-between",
                children: [
                  El({
                    element: "p",
                    className: "text-sm text-dark_gray",
                    innerText: "Total",
                  }),
                  El({
                    element: "p",
                    className: "w-1/2 flex justify-end",
                    innerText: "-",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "hr",
            className: "text-gray mb-5",
          }),
          El({
            element: "div",
            eventListener: [
              {
                event: "click",
                callback: () => Router().navigate("/payment"),
              },
            ],
            children: [
              Button(
                "Continue to Payment",
                "continuePayment",
                false,
                "black",
                "white",
                "4",
                "xl",
                "arrow",
                "none"
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
