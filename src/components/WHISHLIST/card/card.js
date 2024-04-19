import { showSingelProduct } from "../../../utils/functions/showSingelProduct/showSingelProduct";
import { El } from "../../../utils/shared/El";

export function Card(item) {
  console.log(item);
  return El({
    element: "div",
    id: item.id,
    className: "flex flex-col gap-2 w-46 relative",
    eventListener: [
      {
        event: "click",
        callback: (e) => {
            showSingelProduct(e.currentTarget.id);
        },
      },
    ],
    children: [
      El({
        element: "img",
        className: "h-44 w-44 rounded-3xl ",
        src: item.imageURL,
      }),
      El({
        element: "h4",
        innerText: item.name,
        className: "truncate text-blue_tangaroa  font-bold text-lg",
      }),
      El({
        element:"div",
        className: "flex items-center gap-3",
        children:[
          El({
            element:"div",
            innerHTML :`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#212529" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.978.978 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="#212529" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.028 1.028 0 0 0-.897.495"/></svg>`
          }),
          El({
            element:"div",
            className:"text-sm text-dark_gray border-r-2 pr-2",
            innerText:"4.6"
          }),
          El({
            element:"div",
            className:"text-xs bg-gray p-2 rounded-lg ",
            innerText:"6.641 sold"
          })
        ]
      }),
      El({
        element: "p",
        className: "text-md font-semibold text-blue_tangaroa ",
        innerText: `$ ${item.price}.00`,
      }),
      El({
        element:"div",
        className:"flex items-center justify-center bg-zinc-800 h-8 w-8 rounded-full absolute right-6 top-4",
        children:[
          El({
            element:"div",
            className:"pt-1",
            innerHTML:`<svg width="22" height="22" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_5343)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3993 4.14593C10.7257 3.08425 8.02273 2.08032 5.68853 4.46071C0.147523 10.1114 9.64984 21 14 21C18.3501 21 27.8525 10.1114 22.3115 4.46072C19.9773 2.08035 17.2744 3.08427 15.6007 4.14593C14.655 4.74582 13.345 4.74582 12.3993 4.14593ZM18.744 5.29891C18.3568 5.15178 17.9236 5.34638 17.7765 5.73358C17.6293 6.12078 17.8239 6.55395 18.2111 6.70109C18.5718 6.83816 18.9484 7.07039 19.3266 7.44544C19.8084 7.92308 20.1133 8.44658 20.2832 8.99774C20.4053 9.39356 20.8251 9.61548 21.221 9.49343C21.6168 9.37137 21.8387 8.95154 21.7166 8.55572C21.473 7.76568 21.0371 7.02899 20.3827 6.38024C19.8665 5.86843 19.3147 5.51581 18.744 5.29891Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_2_5343" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_5343"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_5343" result="shape"/>
            </filter>
            </defs>
            </svg>
            `
          })
        ]
      })
    ],
  });
}
