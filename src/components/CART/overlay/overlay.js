import { El } from "../../../utils/shared/El";

export function Overlay(){
        return El({
          element: "div",
          id: "overlay",
          className:
            "overlay fixed top-0 bg-black w-full h-full bg-opacity-25 z-0 hidden ",
        });
}