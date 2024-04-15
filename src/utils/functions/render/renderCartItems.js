import { Card } from "../../../components/CART/card/card";

export function renderCartItems(products, id) {
    console.log(products);
    const cartItems = document.getElementById(`${id}`);
    // Reset
    cartItems.innerHTML = "";
    products.map((item) => {
        cartItems.append(Card(item));
    });
  }
  