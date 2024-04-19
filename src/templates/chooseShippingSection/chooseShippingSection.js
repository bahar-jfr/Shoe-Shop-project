import { Button } from "../../components/shared/button/button";
import { renderChooseShipping } from "../../utils/functions/render/renderChooseShipping";
import { El } from "../../utils/shared/El";

export function chooseShippingSection() {
  return El({
    element: "div",
    className: "flex flex-col py-6",
    children: [
      El({
        element: "div",
        id: "shippingAdd",
        className: "flex flex-col gap-6 pb-8",
        children: renderChooseShipping(),
      }),
      El({
        element: "div",
        className: "mt-56",
        children: [
          Button(
            "Apply",
            "applyAdd",
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
