import { ActionIcon } from "../../components/HOME/actionIcon/actionIcon";
import { El } from "../../utils/shared/El";

export function actions() {
  return El({
    element: "div",
    className: "flex items-center justify-between  fixed bottom-0 left-1/2 -translate-x-1/2 w-full px-12 py-3 bg-white",
    children: [
      ActionIcon("Home"),
      ActionIcon("Cart"),
      ActionIcon("Orders"),
      ActionIcon("Wallet"),
      ActionIcon("Profile"),
    ],
  });
}
