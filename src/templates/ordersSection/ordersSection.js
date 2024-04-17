import { get } from "../../api/get/get";
import { renderOrders } from "../../utils/functions/render/renderOrders";
import { El } from "../../utils/shared/El";

export function ordersSection() {
  return El({
    element: "div",
    children: [
      El({
        element: "div",
        className:"flex items-center justify-evenly w-full pb-6",
        children: [
          El({
            element: "p",
            id:"activeOrder",
            className:"flex items-center justify-center w-1/2 border-b-2 text-lg font-semibold pb-4 ",
            eventListener:[
              {
                event: "click",
                callback:()=>{
                  get("users").then((res) => {
                    renderOrders(res.data[0], "orderItems","cart","Track Order")}),
                    document.getElementById("activeOrder").style.color = "black",
                    document.getElementById("completeOrder").style.color = "gray"
                
                }
              }
            ],
            innerText: "Active",
          }),
          El({
            element: "p",
            id:"completeOrder",
            className:"flex items-center justify-center w-1/2 border-b-2 text-lg font-semibold pb-4 text-dark_gray" ,
            eventListener:[
              {
                event: "click",
                callback:()=>{
                  get("users").then((res) => {
                    renderOrders(res.data[0], "orderItems","orders","Buy Again")}),
                    document.getElementById("activeOrder").style.color = "gray",
                    document.getElementById("completeOrder").style.color = "black"
                }
              }
            ],
            innerText: "Completed",
          }),
        ],
      }),
      El({
        element: "div",
        id: "orderItems",
        className:"flex flex-col gap-6 ",
        children: [
          get("users").then((res) => {
            renderOrders(res.data[0], "orderItems","cart","Track Order");
          }),
        ],
      }),
    ],
  });
}
