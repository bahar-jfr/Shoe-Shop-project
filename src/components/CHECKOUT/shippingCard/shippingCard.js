import { Router } from "../../../routes/routes";
import { El } from "../../../utils/shared/El";

export function ShippingCard(text,type) {
  return El({
    element: "div",
    className: "flex items-center gap-4 p-5 rounded-2xl shadow-lg",
    children: [
      El({
        element: "div",
        className:"bg-gray w-14 h-14 rounded-full flex items-center justify-center",
        children: [
          El({
            element: "div",
            className: "bg-black w-10 h-10 rounded-full flex items-center justify-center",
            children: [
              El({
                element: "div",
                innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28"><path fill="white" d="M14 2.25A9.75 9.75 0 0 1 23.75 12c0 4.12-2.895 8.61-8.61 13.518a1.75 1.75 0 0 1-2.283-.002l-.378-.328C7.017 20.408 4.25 16.028 4.25 12A9.75 9.75 0 0 1 14 2.25m0 6a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"/></svg>`,
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className:"flex flex-col gap-2",
        children: [
          El({
            element: "p",
            className: "text-md font-bold",
            innerText: text,
          }),
          El({
            element: "p",
            className:"text-dark_gray text-sm",
            innerText: "64180 Sunbrook Park,PC 5679",
          }),
        ],
      }),
      El({
        element: "div",
        id: "iconType",
        children:[ declareIconType(type)],
      }),
    ],
  });
}

function Edit() {
  return El({
    element: "p",
    eventListener:[
      {
        event: "click",
        callback: ()=>  Router().navigate("/shippingaddress")
      }
    ],
    innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18M15.27 4L18 6.73l-2 1.95L13.32 6Z"/></svg>`,
  });
}

function Radio() {
  return El({
    element: "input",
    className: " accent-black w-5 h-5",
    type: "radio",
  });
}

function declareIconType(type) {
  let content;
  switch (type) {
    case "edit":
      content = Edit();
      break;
    case "radio":
      content = Radio();
      break;
    default:
      console.error("Invalid type!");
  }

  return content;
}
