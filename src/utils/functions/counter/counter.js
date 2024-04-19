import { get } from "../../../api/get/get";
import { set, setFromCart } from "../../../api/set/set";

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
    console.log(arrayOfOrders);
    const findItem = arrayOfOrders.cart.find((item) => item.id == product.id);
    findItem.quantity = product.quantity;
    findItem.totalPrice = product.totalPrice;

    const totalPriceCart = document.getElementById("totalPriceCart");
    let sum = 0;
    arrayOfOrders.cart.forEach((item) => {
      sum += parseFloat(item.totalPrice.slice(1));
    });
    totalPriceCart.innerText = sum.toFixed(2);

    setFromCart(arrayOfOrders);
  }
}