import { Button } from "../../components/shared/button/button";
import { renderPayment } from "../../utils/functions/render/renderPayment";
import { El } from "../../utils/shared/El";

export function peymentSection() {
  return El({
    element: "div",
    className: "flex flex-col py-6",
    children: [
        El({
            element:"p",
            innerText:"Select the payment method you want to use"
        }),
      El({
        element: "div",
        id: "peyment",
        className: "flex flex-col gap-6 pb-12 pt-6",
        children: renderPayment(),
      }),
      El({
        element: "div",
        className: "mt-56",
        children: [
          Button(
            "Confirm Payment",
            "confirmPay",
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
