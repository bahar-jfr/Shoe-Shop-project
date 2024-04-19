
import { renderRecentSearch } from "../../utils/functions/searchItems/searchItems";
import { El } from "../../utils/shared/El";

export function searchSection() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className:"flex items-center justify-between py-4",
        children: [
          El({
            element: "p",
            className:"text-xmd font-semibold",
            innerText: "Recent",
          }),
          El({
            element: "p",
            className:"text-md font-semibold",
            innerText: "Clear All",
            eventListener:[
                {
                    event:"click",
                    callback:()=>{localStorage.removeItem('recentSearch'),renderRecentSearch()}
                }
            ]
          }),
        ],
      }),
      El({
        element: "hr",
        className: "text-gray",
      }),
      El({
        element: "div",
        className: "flex flex-wrap gap-4 overflow-hidden mb-10 pb-12 pt-6",
        id: "recentSearch",

      }),
    ],
  });
}
