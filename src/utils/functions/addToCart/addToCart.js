import { get } from "../../../api/get/get";
import { set } from "../../../api/set/set";

export async function addToCart(item) {
  let countNum = document.getElementById(`num${item.id}`);
  let totalPriceProduct = document.getElementById(`price${item.id}`);

  if (countNum.innerText == 0) return;
  const choosenProduct = {
    id:item.id,
    name: item.name,
    price: item.price,
    image: item.imageURL,
    quantity: countNum.innerText,
    totalPrice: totalPriceProduct.innerText,
  };

  const arrayOfOrders = await get("users").then((res) => {
    return res.data[0];
  });

  arrayOfOrders.cart.push(choosenProduct);
  set(arrayOfOrders);
}
