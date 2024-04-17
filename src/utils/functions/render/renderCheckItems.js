import { set } from "../../../api/set/set";
import { Card } from "../../../components/CHECKOUT/card/card";

export function renderCheckItems(products, id) {
    const checkItems = document.getElementById(`${id}`);
  
    // Reset
    checkItems.innerHTML = "";
    products.cart.map((item) => {
        checkItems.append(Card(item));
  
      const amountPrice = document.getElementById("amountPrice");
      let sum = 0;
      products.cart.forEach((e) => {
        sum += parseFloat(e.totalPrice.slice(1));
      });
      amountPrice.innerText = sum.toFixed(2);
  
      set(products);
    });
  }