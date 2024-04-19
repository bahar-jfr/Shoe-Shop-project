import { PrevPage } from "../../components/shared/prevPage/prevPage";
import { Layout } from "../../layouts/layout";
import { chooseShippingSection } from "../../templates/chooseShippingSection/chooseShippingSection";
import { El } from "../../utils/shared/El";

export function chooseShipping() {
    const style = "flex flex-col px-6 pt-4 relative";
    return El({
      element: "div",
      children: [
        Layout(PrevPage("Choose Shipping", "checkout","none"), chooseShippingSection(), false, "", style),
      ],
    });
  }