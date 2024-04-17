
import { TitlePage } from "../../components/ORDER/titlePage/titlePage";
import { Layout } from "../../layouts/layout";
import { actions } from "../../templates/actions/actions";
import { ordersSection } from "../../templates/ordersSection/ordersSection";
import { El } from "../../utils/shared/El";

export function orders() {
    const style = "flex flex-col px-6 pt-4 relative";
    return El({
      element: "div",
      children: [
        Layout(TitlePage(), ordersSection(), true, actions(), style),
      ],
    });
  }