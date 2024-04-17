import { El } from "../../../utils/shared/El";

export function TitlePage() {
  return El({
    element: "div",
    className: "flex justify-between items-center py-6 px-2",
    children: [
      El({
        element: "div",
        className: "flex items-center gap-4",
        children: [
          El({
            element: "span",
            innerHTML: `<svg width="20" height="28" viewBox="0 0 28 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.49985 9.50006C11.8998 5.90003 17.4999 2.50003 20.4999 1.00003C22.9999 -0.49997 24.1158 5.19135 21.9999 9.00006C19.8839 12.8088 13.9999 15.0001 13.9999 15.0001C13.9999 15.0001 26.9999 12.0001 27.4999 23.5001C27.6303 26.5001 25.4999 30.0001 23.9999 31.0001C22.4999 32.0001 9.49988 39.7501 7.99988 40.5001C6.24162 41.3792 5.49987 39 5.49987 36C5.49987 29 13.4999 26.5001 13.4999 26.5001C6.49987 27.5001 1.99987 25.0001 0.999866 17.5001C0.666536 15.0001 2.49988 11.1876 5.49985 9.50006Z" fill="black"/>
                </svg>
                `,
          }),
          El({
            element: "p",
            className:"text-xlg font-semibold",
            innerText: "My Cart",
          }),
        ],
      }),
      El({
        element: "span",
        innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#152536" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"/></svg>`,
      }),
    ],
  });
}
