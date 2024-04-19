import { get } from "../../../api/get/get";
import { set } from "../../../api/set/set";
import { changeHeartColor } from "../changeHeartColor/changeHeartColor";

export async function addToCart(item, isFav) {
  let countNum = document.getElementById(`num${item.id}`);
  let totalPriceProduct = document.getElementById(`price${item.id}`);
 

  if (countNum.innerText == 0) return;
  const choosenProduct = {
    id: item.id,
    name: item.name,
    brand: item.brand,
    price: item.price,
    imageURL: item.imageURL,
    quantity: countNum.innerText,
    totalPrice: totalPriceProduct.innerText,
    isFav: isFav,
  };

  const arrayOfOrders = await get("users").then((res) => {
    return res.data[0];
  });

  arrayOfOrders.cart.push(choosenProduct);
  set(arrayOfOrders);
}
