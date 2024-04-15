import { get } from "../../../api/get/get";
import { set } from "../../../api/set/set";

export async function counter(element, product) {
  let countNum = document.getElementById(`num${product.id}`);
  let totalPriceProduct = document.getElementById(`price${product.id}`);

  if (element.target.id === "plus") {
    countNum.innerText++;
  } else if (countNum.innerText != 0 && element.target.id === "mines") {
    countNum.innerText--;
  }

  totalPriceProduct.innerText = `$${product.price * countNum.innerText}.00`;
  product.quantity = countNum.innerText;
  product.totalPrice = totalPriceProduct.innerText;

  const arrayOfOrders = await get("users").then((res) => {
    return res.data[0];
  });
  if (location.pathname === "/cart") {
    let findItem = arrayOfOrders.orders.find((item) => item.id == product.id);
    findItem.quantity = product.quantity;
    findItem.totalPrice = product.totalPrice;
    set(arrayOfOrders)
  }
}
