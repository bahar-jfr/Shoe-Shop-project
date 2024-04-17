
import { Card } from "../../../components/ORDER/card/card";
import { NoProduct } from "../../../components/ORDER/noProduct/noProduct";

export function renderOrders(products, id, list,text) {
  const orderItems = document.getElementById(`${id}`);
  console.log(products[list]);
  // Reset
  orderItems.innerHTML = "";
  if (products[list].length == 0) {
    orderItems.append(NoProduct());
  } else {
    products[list].map((item) => {
      orderItems.append(Card(item,text));
    });
  }

  /*  set(products); */
}
