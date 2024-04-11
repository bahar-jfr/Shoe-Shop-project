import { Card } from "../../../components/HOME/card/card";

export function renderAllProducts(products) {
  const cardContainer = document.getElementById("cardContainer");
console.log(products);
  // Reset
  cardContainer.innerHTML = "";
  products.forEach((item) => {
    cardContainer.append(Card(item.imageURL, item.name, item.price));
  });
}
