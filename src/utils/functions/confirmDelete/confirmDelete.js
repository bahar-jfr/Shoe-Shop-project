import { get } from "../../../api/get/get";
import { set, setDeleted } from "../../../api/set/set";
import { renderCartItems } from "../render/renderCartItems";

export async function confirmDelete(item) {
  let arrayOfOrders = await get("users").then((res) => {
    return res.data[0];
  });
  console.log(arrayOfOrders);

  arrayOfOrders.cart = arrayOfOrders.cart.filter((e) => e.id != item.id);
  console.log(arrayOfOrders);
  setDeleted(arrayOfOrders);

    renderCartItems(arrayOfOrders, "cartItems");
  
}
