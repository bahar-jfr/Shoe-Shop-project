import { PrevPage } from "../components/prevPage/prevPage";
import Navigo from "navigo";
import { login } from "../pages/login";

export let router = new Navigo("/");

const changePage = (page) => {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(page);
};

export const Router = () => {
  router.on("/", () => {
    changePage(login());
  });

  return router;
};
