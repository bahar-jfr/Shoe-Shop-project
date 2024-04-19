import { Button } from "../../components/shared/button/button";
import { renderShippingAdd } from "../../utils/functions/render/renderShippingAdd";
import { El } from "../../utils/shared/El";

export function shippingAddSection() {
  return El({
    element: "div",
    className: "flex flex-col py-6",
    children: [
      El({
        element: "div",
        id: "shippingAdd",
        className:"flex flex-col gap-6 pb-8",
        children: renderShippingAdd(),
      }),

      Button(
        "Add New Address",
        "newAddress",
        false,
        "gray",
        "black",
        "4",
        "md",
        "none",
        "none"
      ),
  El({
    element:"div",
    className:"mt-48",
    children:[
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
    ]
  })
    ],
  });
}
