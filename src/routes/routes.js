import Navigo from "navigo";
import { login } from "../pages/login/login";
import { home } from "../pages/home/home";
import { Cart_Route, Home_Route, Login_Route, Main_Route, Singel_Route } from "./path";
import { brandProducts } from "../pages/home/brandProducts";
import { singelProduct } from "../pages/home/singelProduct";

export let router = new Navigo("/");

const changePage = (page) => {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(page);
};

export const Router = (route) => {
  router
    .on(Main_Route, () => {
      changePage(home());
    })
    .on(Login_Route, () => {
      changePage(login());
    })
    .on(Cart_Route, () => {
      changePage(Cart());
    })
    .on(Home_Route, () => {
      changePage(home());
    })
    .on(Singel_Route,()=>{
      changePage(singelProduct())
    })
    .on(`/${route}`,()=>{
      changePage(brandProducts(route))
    })

  return router;
};
