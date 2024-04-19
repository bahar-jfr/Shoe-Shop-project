import { Router } from "../../routes/routes";
import { El } from "../../utils/shared/El";

export function userInfo() {
  return El({
    element: "div",
    className: "flex items-center justify-between pb-4 mb-2",
    children: [
      El({
        element: "div",
        className: "flex",
        children: [
          El({
            element: "div",
            children: [
              El({
                element: "img",
                className: "h-12 rounded-full",
                src: "./src/assets/images/profile.jpg",
              }),
            ],
          }),
          El({
            element: "div",
            className: "pl-4 ",
            children: [
              El({
                element: "p",
                className: "text-dark_gray font-medium",
                innerText: "Good Morning 👋",
              }),
              El({
                element: "p",
                className: "text-blue_tangaroa font-bold",
                innerText: "Bahar Jafarimehr",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex gap-4",
        children: [
          El({
            element: "img",
            src: "./src/assets/icons/bell.svg",
          }),
          El({
            element: "img",
            eventListener:[
              {
                event:"click",
                callback:()=> Router().navigate("/whishlist")
              }
            ],
            src: "./src/assets/icons/heart.svg",
          }),
        ],
      }),
    ],
  });
}
