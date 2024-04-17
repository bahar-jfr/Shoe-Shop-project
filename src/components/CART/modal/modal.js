import { confirmDelete } from "../../../utils/functions/confirmDelete/confirmDelete";
import { El } from "../../../utils/shared/El";
import { Button } from "../../shared/button/button";

export function Modal() {
  return El({
    element: "div",
    id: "modal",
    className:
      "flex flex-col bg-white fixed bottom-0 z-10 h-2/6 w-full px-6 pt-4 hidden rounded-t-6xl ",
    children: [
      El({
        element: "p",
        className: "flex justify-center text-xlg font-semibold py-6",
        innerText: "Remove From Cart?",
      }),
      El({
        element: "hr",
        className: "text-medium_gray",
      }),
      El({
        element: "div",
        className: "py-6",
        id: "modalCard",
      }),
      El({
        element: "hr",
        className: "text-medium_gray",
      }),
      El({
        element: "div",
        className: "flex py-6 gap-3 w-full",
        children: [
          Button(
            "Cancel",
            "cancel",
            false,
            "gray",
            "black",
            "4",
            "sm",
            "none",
            "none"
          ),
          Button(
            "Yes,Remove",
            "remove",
            false,
            "black",
            "white",
            "4",
            "xl",
            "none",
            "none"
          ),
        ],
      }),
    ],
  });
}
