import { Card } from "../../../components/WHISHLIST/card/card";

export function renderWhishList(products, id) {
    const whishListItems = document.getElementById(`${id}`);
  
    // Reset
    whishListItems.innerHTML = "";
    products.map((item) => {
        whishListItems.append(Card(item));
    });
  }