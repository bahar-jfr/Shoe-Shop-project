import { get } from "../../../api/get/get";
import { renderProducts } from "../render/renderProducts";
import { renderWhishList } from "../render/renderWhishList";

export function filterBrand(e, endpoint, container) {
/*   const colorVar = {
    blue: "blue_tangaroa",
    black: "black",
  }; */

/*   const button = document.querySelector(`${e.target.id}`);
  console.log(button);
  button.classList.remove("bg-white");
  button.classList.remove(`text-${colorVar[color]}`);
  button.classList.add(`bg-${colorVar[color]}`); */

  if (endpoint === "products") {
    get(`${endpoint}`).then((res) => {
      const arrayOfData = res.data;
      const filteredProducts = arrayOfData.filter(
        (item) => item.brand === e.target.id.toUpperCase()
      );
      if (e.target.id === "All") {
        renderProducts(arrayOfData, `${container}`);
      } else {
        renderProducts(filteredProducts, `${container}`);
      }
    });
  } else {
    get(`${endpoint}`).then((res) => {
      const arrayOfData = res.data[0];
      const filteredProducts = arrayOfData.wishlist.filter(
        (item) => item.brand === e.target.id.toUpperCase()
      );
      if (e.target.id === "All") {
        renderWhishList(arrayOfData, `${container}`);
      } else {
        renderWhishList(filteredProducts, `${container}`);
      }
    });
  }
}
