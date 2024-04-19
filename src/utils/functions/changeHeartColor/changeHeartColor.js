import { get } from "../../../api/get/get";
import { setWish } from "../../../api/set/set";

export async function changeHeartColor(item) {
  const heartIcon = document.getElementById("heartIcon");

  heartIcon.setAttribute("fill", "red");

  const choosenProduct = {
    id: item.id,
    name: item.name,
    brand: item.brand,
    price: item.price,
    imageURL: item.imageURL,
    isFav: true,
  };

  const arrayOfWish = await get("users").then((res) => {
    return res.data[0];
  });

  arrayOfWish.wishlist.push(choosenProduct);
  console.log(arrayOfWish);
  setWish(arrayOfWish);
}
