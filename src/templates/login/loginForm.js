import { FormInput } from "../../components/shared/formInput/formInput";
import { El } from "../../utils/shared/El";

export function loginForm() {
  return El({
    element:"div",
    children:[
      El({
        element: "div",
        className: "flex items-center justify-center mt-20 mb-28",
        children: [
          El({
            element: "img",
            src: "./src/assets/icons/black-logo.svg",
          }),
        ],
      }),
      El({
        element: "h1",
        className: "font-semibold text-xl text-blue_tangaroa text-center px-3 ",
        innerText: "Login to Your Acount",
      }),
      El({
        element: "form",
        className: "flex flex-col gap-4 mt-12 mb-10",
        children: [FormInput("Email", "Empty"), FormInput("Password", "Eye")],
      }),
    El({
      element: "form",
      className: "flex items-center justify-center gap-2 mb-68",
      children: [
        El({
          element: "input",
          id: "checkbox",
          className: "cursor-pointer accent-black h-6",
          type: "checkbox",
        }),
        El({
          element: "label",
          htmlFor: "checkbox",
          className: "font-normal text-md text-blue_charcoal h-6 ",
          innerText: "Remember me",
        }),
      ],
    })
  ]
})
}
