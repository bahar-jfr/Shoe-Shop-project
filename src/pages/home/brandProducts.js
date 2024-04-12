import { PrevPage } from "../../components/shared/prevPage/prevPage";
import { Layout } from "../../layouts/layout";
import { products } from "../../templates/products/products";

export function brandProducts(brand) {
  const style = "flex flex-col px-6";
  return Layout(
    PrevPage(brand,"home"),
    products(brand.toUpperCase()),
    false,
    "",
    style
  );
}
