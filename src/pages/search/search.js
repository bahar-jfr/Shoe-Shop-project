import { FormInput } from "../../components/shared/formInput/formInput";
import { Layout } from "../../layouts/layout";
import { searchSection } from "../../templates/searchSection/searchSection";
import { renderRecentSearch } from "../../utils/functions/searchItems/searchItems";
import { El } from "../../utils/shared/El";

export function search() {
  const style = "flex flex-col px-6 pt-8 relative";
  const search = El({
    element: "div",
    children: [
      Layout(
        FormInput("Search", "searchPage", "Filter"),
        searchSection(),
        false,
        "",
        style
      ),
    ],
  });

  return search;
}

window.onload = () => {
  search();
  // Render the search element here
  renderRecentSearch();
};
