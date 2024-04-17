import { El } from "../../../utils/shared/El";

const iconVariables = {
  basket: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M12 2a4 4 0 0 1 4 4h2.035a2 2 0 0 1 1.999 1.929l.428 12A2 2 0 0 1 18.464 22H5.536a2 2 0 0 1-1.998-2.071l.428-12A2 2 0 0 1 5.965 6H8a4 4 0 0 1 4-4m-2 6H8v1a1 1 0 0 0 1.993.117L10 9zm6 0h-2v1a1 1 0 1 0 2 0zm-4-4a2 2 0 0 0-1.995 1.85L10 6h4a2 2 0 0 0-2-2"/></g></svg>`,
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"/></svg>`,
  none: ``,
};

export function Button(
  text,
  id,
  bool,
  bgColor,
  color,
  py,
  size,
  iconR,
  iconL,
) {
  const colorVar = {
    blue: "bg-blue_charcoal",
    black: "bg-black",
    gray: "bg-gray",
  };

  return El({
    element: "button",
    id,
    className: `py-${py} ${colorVar[bgColor]} text-${color} rounded-xxl cursor-pointer disabled:opacity-65 w-full shadow-${size} flex justify-center items-center gap-3`,
    children: [
      El({
        element: "span",
        className: "mb-1",
        innerHTML: iconVariables[iconL],
      }),
      El({
        element: "span",
        id,
        innerText: text,
      }),
      El({
        element: "span",
        innerHTML: iconVariables[iconR],
      }),
    ],
    disabled: bool,
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
