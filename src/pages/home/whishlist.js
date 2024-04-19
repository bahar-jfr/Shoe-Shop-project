import { PrevPage } from "../../components/shared/prevPage/prevPage";
import { Layout } from "../../layouts/layout";
import { whishListSection } from "../../templates/whishListSection/whishListSection";

export function whishList() {
    const style = "flex flex-col pl-6 pr-2 pt-4";
    return Layout(
      PrevPage("My Whishlist", "home","search"),
      whishListSection(),
      false,
      "",
      style
    );
  }
  