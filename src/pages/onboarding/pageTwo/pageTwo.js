import { Router } from "../../../routes/routes";
import { El } from "../../../utils/shared/El";

export function pageTwo() {
  setTimeout(() => {
    Router().navigate("/slider");
  }, 3000); // Delay for 3 seconds

  return El({
    element: "div",
    children: [
      El({
        element: "img",
        src: "./src/assets/images/onboarding page 2.png",
      }),
    ],
  });
}
