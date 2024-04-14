import { Card } from "../../../components/HOME/card/card";

export function renderProducts(products, id) {
  const cardContainer = document.getElementById(`${id}`);
  // Reset
  cardContainer.innerHTML = "";
  products.map((item) => {
    cardContainer.append(Card(item.id,item.imageURL, item.name, item.price));
  });
}
