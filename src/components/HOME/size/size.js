import { El } from "../../../utils/shared/El";

export function Size(arrayOfSize) {
  return arrayOfSize.map((element) =>
    El({
      element: "div",
      className: `h-8 w-8 rounded-full border border-dark_gray bg-white flex items-center justify-center`,
      children: [
        El({
          element: "p",
          innerText: element,
        }),
      ],
    })
  );
}
