import { PrevPage } from "../../components/shared/prevPage/prevPage";
import { Layout } from "../../layouts/layout";
import { shippingAddSection } from "../../templates/shippingAddSection/shippingAddSection";
import { El } from "../../utils/shared/El";

export function shippingAdd() {
    const style = "flex flex-col px-6 pt-4 relative";
    return El({
      element: "div",
      children: [
        Layout(PrevPage("Shipping Address", "checkout","none"), shippingAddSection(), false, "", style),
      ],
    });
  }