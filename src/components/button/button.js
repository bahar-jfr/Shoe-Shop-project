import { El } from "../../utils/shared/El";

export function Button(text, id) {
  return El({
    element: "button",
    id,
    className:
      "py-3 px-4 bg-blue_charcoal text-white rounded-xxl cursor-pointer disabled:opacity-65 w-full",
    innerText: text,
    disabled: true,
  });
}

export function changeAbleButton() {
  const signIn = document.getElementById("signIn");
  const email = document.getElementById("Email");
  const pass = document.getElementById("Password");

  if (pass.value != "" && email.value != "") {
    signIn.disabled = false;
  }
}
