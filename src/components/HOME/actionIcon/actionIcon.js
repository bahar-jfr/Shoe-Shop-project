import { Router } from "../../../routes/routes";
import { El } from "../../../utils/shared/El";

const actionVariables = {
  Home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#212529" stroke="#212529" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"/><path fill="#212529" stroke="#212529" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"/></svg>
`,
  Cart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#212529" d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z"/></svg>
`,
  Orders: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none"><path d="M39 32H13L8 12h36z"/><path stroke="#212529" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"/><circle cx="13" cy="39" r="3" stroke="#212529" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><circle cx="39" cy="39" r="3" stroke="#212529" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/></g></svg>
`,
  Wallet: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><rect width="416" height="288" x="48" y="144" fill="none" stroke="#212529" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"/><path fill="none" stroke="#212529" stroke-linejoin="round" stroke-width="32" d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"/><path fill="#212529" d="M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/></svg>
`,
  Profile: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#212529" stroke-width="1.5"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="12" cy="7" r="3"/></g></svg>
`,
};

export function ActionIcon(item) {
  return El({
    element: "div",
    className: "flex flex-col items-center ",
    children: [
      El({
        element: "div",
        id: item,
        innerHTML: actionVariables[item],
      }),
      El({
        element: "p",
        className: "text-xs font-semibold text-blue_tangaroa",
        innerText: item,
      }),
    ],
    eventListener: [
      {
        event: "click",
        callback: () => Router().navigate(`/${item.toLowerCase()}`),
      },
    ],
  });
}
