import { Router } from "../../../routes/routes";
import { El } from "../../../utils/shared/El";



export function PrevPage(title = "", route, icon) {
  const iconVar = {
    dot : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3"><path d="M12 12.25v-.5m4 .5v-.5m-8 .5v-.5"/><circle cx="12" cy="12" r="9"/></g></svg>`,
    add :`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M7.007 12a.75.75 0 0 1 .75-.75h3.493V7.757a.75.75 0 0 1 1.5 0v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1-.75-.75"/><path fill="black" fill-rule="evenodd" d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48m9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163" clip-rule="evenodd"/></svg>`,
    search:`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#152536" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"/></svg>`,
    none:""
  }
  

  return El({
    element:"div",
    className:"w-full flex items-center justify-between ",
    children:[
      El({
        element: "div",
        className: "flex items-center py-4",
        children: [
          El({
            element: "div",
            eventListener: [
              {
                event: "click",
                callback: () => Router().navigate(`/${route}`),
              },
            ],
            children: [
              El({
                element: "img",
                className: "",
                src: "./src/assets/icons/arrow-left-short.svg",
              }),
            ],
          }),
          El({
            element: "p",
            className:
              "text-slg pl-3 font-semibold w-fit text-blue_tangaroa flex items-center",
            innerText: title,
          }),
        ],
      }),
      El({
        element:"p",
        innerHTML : iconVar[icon]
      })
    ]
  })
}
