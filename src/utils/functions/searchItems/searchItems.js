import { _ } from "lodash";
import { search } from "../../../api/get/get";
import { renderSearch } from "../render/renderSerach";
import { El } from "../../shared/El";
import { NoProduct } from "../../../components/ORDER/noProduct/noProduct";

let array = getItem();

export function searchItems(e) {
  const searchItem = e.value;
  const recentSearch = document.getElementById("recentSearch");
  recentSearch.className =
    "flex flex-wrap gap-4 overflow-hidden mb-10 pb-12 pt-6";

  const debouncedSearch = _.debounce((searchItem) => {
    search(searchItem).then((res) => {
      if (res.data.length === 0) {
        recentSearch.innerHTML = "";
        recentSearch.append(
          NoProduct(
            "Not Found",
            "Sorry, the keyword you entered cannot be found please check again or search with another keyword"
          )
        );
      } else {
        renderSearch(res.data);
        array.push(searchItem);
        setItem(array);
      }
    });
  }, 2000);

  debouncedSearch(searchItem);
}

function setItem(array) {
  localStorage.setItem("recentSearch", JSON.stringify(array));
}

function getItem() {
  return JSON.parse(localStorage.getItem("recentSearch")) || [];
}

export function renderRecentSearch() {
  if (location.pathname == "/search") {
    const inputSearch = document.getElementById("searchPage");
    const recentSearch = document.getElementById("recentSearch");
    recentSearch.className = "flex flex-col";

    if (inputSearch.value === "") {
      const array = getItem();
      recentSearch.innerHTML = "";

      array.forEach((item) => {
        if (item.length >= 4) {
          const element = El({
            element: "div",
            className: "flex items-center justify-between pt-4",
            children: [
              El({
                element: "div",
                innerText: item,
              }),
              El({
                element: "span",
                innerHTML: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6516 11.6516C13.9445 11.3588 13.9445 10.8839 13.6516 10.591C13.3588 10.2981 12.8839 10.2981 12.591 10.591L11 12.182L9.40901 10.591C9.11612 10.2981 8.64124 10.2981 8.34835 10.591C8.05546 10.8839 8.05546 11.3588 8.34835 11.6517L9.93934 13.2426L8.34835 14.8336C8.05546 15.1265 8.05546 15.6014 8.34835 15.8943C8.64124 16.1872 9.11612 16.1872 9.40901 15.8943L11 14.3033L12.591 15.8943C12.8839 16.1872 13.3588 16.1872 13.6517 15.8943C13.9445 15.6014 13.9445 15.1265 13.6517 14.8336L12.0607 13.2426L13.6516 11.6516Z" fill="gray"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0257 2.27937C14.1685 2.25 13.1711 2.25 12.0111 2.25H11.9548C10.1182 2.24999 8.67861 2.24999 7.53648 2.37373C6.37094 2.50001 5.42656 2.76232 4.62024 3.34815C4.13209 3.70281 3.70281 4.13209 3.34815 4.62024C2.76232 5.42656 2.50001 6.37094 2.37373 7.53648C2.24999 8.67861 2.24999 10.1182 2.25 11.9548V12.0452C2.24999 13.8818 2.24999 15.3214 2.37373 16.4635C2.50001 17.6291 2.76232 18.5734 3.34815 19.3798C3.70281 19.8679 4.13209 20.2972 4.62024 20.6518C5.42656 21.2377 6.37094 21.5 7.53648 21.6263C8.67859 21.75 10.1182 21.75 11.9547 21.75H12.0453C13.8818 21.75 15.3214 21.75 16.4635 21.6263C17.6291 21.5 18.5734 21.2377 19.3798 20.6518C19.8679 20.2972 20.2972 19.8679 20.6518 19.3798C21.2377 18.5734 21.5 17.6291 21.6263 16.4635C21.75 15.3214 21.75 13.8818 21.75 12.0453V11.989C21.75 10.8289 21.75 9.83153 21.7206 8.97432C21.6564 7.10087 21.4537 5.7239 20.6518 4.62024C20.2972 4.13209 19.8679 3.70281 19.3798 3.34815C18.2761 2.5463 16.8991 2.34356 15.0257 2.27937ZM5.50191 4.56168C6.00992 4.19259 6.66013 3.97745 7.69804 3.865C8.74999 3.75103 10.1084 3.75 12 3.75C12.8483 3.75 13.5918 3.75005 14.2518 3.76082C14.2562 4.23547 14.271 4.58489 14.3208 4.8995C14.7105 7.35988 16.6401 9.28952 19.1005 9.67921C19.4151 9.72904 19.7645 9.74381 20.2392 9.74818C20.25 10.4082 20.25 11.1517 20.25 12C20.25 13.8916 20.249 15.25 20.135 16.302C20.0225 17.3399 19.8074 17.9901 19.4383 18.4981C19.1762 18.8589 18.8589 19.1762 18.4981 19.4383C17.9901 19.8074 17.3399 20.0225 16.302 20.135C15.25 20.249 13.8916 20.25 12 20.25C10.1084 20.25 8.74999 20.249 7.69804 20.135C6.66013 20.0225 6.00992 19.8074 5.50191 19.4383C5.14111 19.1762 4.82382 18.8589 4.56168 18.4981C4.19259 17.9901 3.97745 17.3399 3.865 16.302C3.75103 15.25 3.75 13.8916 3.75 12C3.75 10.1084 3.75103 8.74999 3.865 7.69804C3.97745 6.66013 4.19259 6.00992 4.56168 5.50191C4.82382 5.14111 5.14111 4.82382 5.50191 4.56168ZM15.8023 4.66485C15.7699 4.45981 15.7575 4.22238 15.7528 3.81744C17.1131 3.91121 17.8986 4.12615 18.4981 4.56168C18.8589 4.82382 19.1762 5.14111 19.4383 5.50191C19.8738 6.10137 20.0888 6.88688 20.1826 8.24722C19.7776 8.24254 19.5402 8.23015 19.3352 8.19768C17.5166 7.90965 16.0904 6.48339 15.8023 4.66485Z" fill="gray"/>
                </svg>`,
                eventListener: [
                  {
                    event: "click",
                    callback: () => {
                      // Remove item from local storage
                      const newArray = array.filter((i) => i !== item);
                      setItem(newArray);

                      // Remove element from the page
                      element.remove();
                    },
                  },
                ],
              }),
            ],
          });
          recentSearch.append(element);
          return element;
        }
      });
    } else {
      return;
    }
  }
}
