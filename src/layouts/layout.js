import { El } from "../utils/shared/El";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Main } from "./main/main";

export function Layout(header, main, isRenderFooter , footer, style) {
  const renderFooter = !!isRenderFooter ? Footer(footer) : "";
  return El({
    element: "div",
    className: `${style}`,
    children: [Header(header), Main(main), renderFooter],
  });
}
