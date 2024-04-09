import { El } from "../utils/shared/El";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Main } from "./main/main";

export function Layout(header, main, footer) {
  return El({
    element: "div",
    children: [Header(header), Main(main), Footer(footer)],
  });
}
