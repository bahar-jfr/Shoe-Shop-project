import { Modal } from "../../components/CART/modal/modal";
import { Overlay } from "../../components/CART/overlay/overlay";
import { TitlePage } from "../../components/CART/titlePage/titlePage";
import { Layout } from "../../layouts/layout";
import { actions } from "../../templates/actions/actions";
import { cartSection } from "../../templates/cartSection/cartSection";
import { El } from "../../utils/shared/El";

export function cart() {
  const style = "flex flex-col px-6 pt-4 relative";
  return El({
    element: "div",
    children: [
      Layout(TitlePage(), cartSection(), true, actions(), style),
      Overlay(),
      Modal(),
    ],
  });
}
