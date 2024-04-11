import { BrandLogo } from "../../components/HOME/brandLogo/brandLogo";
import { Layout } from "../../layouts/layout";
import { actions } from "../../templates/actions/actions";
import { homeSections } from "../../templates/homeSections/homeSections";
import { userInfo } from "../../templates/userInfo/userInfo";

export function home() {
  const style = "flex flex-col px-6 pt-4 relative";
  return Layout(userInfo(), homeSections(), actions(), style);
}
