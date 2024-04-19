import { El } from "../../../utils/shared/El";

export function ScrollBar(brand, color) {
  const colorVar = {
    blue: "blue_tangaroa",
    black: "black",
  };
  const scrollbar = document.querySelectorAll(".scrollbar");
  scrollbar.forEach((btn) => {
    btn.className = `bg-white text-${colorVar[color]} px-4 py-1.5 border-2 font-semibold border-${colorVar[color]} rounded-2xl`;
  });
  return El({
    element: "div",
    className: `scrollbar bg-white text-${colorVar[color]} px-4 py-1.5 border-2 font-semibold border-${colorVar[color]} rounded-2xl`,
    id: brand,
    innerText: brand,
  });
}
