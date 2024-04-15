import { set } from "../../../api/set/set";
import { Card } from "../../../components/CART/card/card";

export function renderCartItems(products, id) {
  const cartItems = document.getElementById(`${id}`);

  // Reset
  cartItems.innerHTML = "";
  products.map((item) => {
    cartItems.append(Card(item));

    const totalPriceCart = document.getElementById("totalPriceCart");
    let sum = 0;
    products.forEach((e) => {
      sum += parseFloat(e.totalPrice.slice(1));
    });
    totalPriceCart.innerText = sum.toFixed(2);

    set(products);
  });
}
