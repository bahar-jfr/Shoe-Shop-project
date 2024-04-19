import { Card } from "../../../components/WHISHLIST/card/card";

export function renderSearch(array) {
  const searchContainer = document.getElementById("recentSearch");

  searchContainer.innerHTML = "";
  array.forEach((element) => {
    searchContainer.append(Card(element));
  });
}
