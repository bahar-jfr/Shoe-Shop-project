import { El } from "../../../utils/shared/El";

export function BrandLogo(brand, sCol, eCol, sRow, eRow) {
  return El({
    element: "div",
    className: `col-start-${sCol} col-end-${eCol} row-start-${sRow} row-end-${eRow} flex flex-col items-center gap-3`,
    children: [
      El({
        element: "div",
        className:
          "bg-gray rounded-full flex items-center justify-center px-4 py-5",
        children: [
          El({
            element: "img",
            src: `./src/assets/images/${brand}.png`,
          }),
        ],
      }),
      El({
        element: "p",
        className: "text-sm text-blue_tangaroa font-semibold truncate w-15 text-center",
        innerText: brand,
      }),
    ],
  });
}
