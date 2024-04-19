import { El } from "../../../utils/shared/El";

export function Color(arrayOfColor) {
  const colorVar = {
    black: "bg-black",
    red: "bg-red-500",
    white: "bg-white",
    blue: "bg-blue-500",
    brown: "bg-amber-950"
  };
  return arrayOfColor.map((element) =>
    El({
      element: "div",
      className: `h-8 w-8 rounded-full border border-dark_gray ${colorVar[element]}`,
    })
  );
}
