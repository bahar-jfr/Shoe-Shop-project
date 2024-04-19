import { PrevPage } from "../../components/shared/prevPage/prevPage";
import { Layout } from "../../layouts/layout";
import { peymentSection } from "../../templates/paymentSection/paymentSection";
import { El } from "../../utils/shared/El";

export function payment() {
  const style = "flex flex-col px-6 pt-4 relative";
  return El({
    element: "div",
    children: [
      Layout(
        PrevPage("Payment Methods", "checkout", "none"),
        peymentSection(),
        false,
        "",
        style
      ),
    ],
  });
}
