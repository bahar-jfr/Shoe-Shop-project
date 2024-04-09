import { El } from "../../utils/shared/El";

export function Header(elem) {
    return El({
      element: "header",
      children:[elem]
    })
}