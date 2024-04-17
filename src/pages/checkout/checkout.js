import { PrevPage } from "../../components/shared/prevPage/prevPage";
import { Layout } from "../../layouts/layout";
import { checkoutSection } from "../../templates/checkoutSection/checkoutSection";
import { El } from "../../utils/shared/El";

export function checkout() {
  const style = "flex flex-col px-6 pt-4 relative";
  return El({
    element: "div",
    children: [
      Layout(PrevPage("Checkout", "cart","dot"), checkoutSection(), false, "", style),
    ],
  });
}
