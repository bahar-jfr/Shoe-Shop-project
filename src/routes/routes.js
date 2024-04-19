import Navigo from "navigo";
import { login } from "../pages/login/login";
import { home } from "../pages/home/home";
import {
  Cart_Route,
  Check_Route,
  Home_Route,
  Login_Route,
  Main_Route,
  OnboardTwo_Route,
  Orders_Route,
  Search_Route,
  ShippingAdd_Route,
  ShippingType_Route,
  Singel_Route,
  Slider_Route,
  Whish_Route,
  pay_route,
} from "./path";
import { brandProducts } from "../pages/home/brandProducts";
import { singelProduct } from "../pages/home/singelProduct";

import { cart } from "../pages/cart/cart";
import { orders } from "../pages/orders/orders";

import { checkout } from "../pages/checkout/checkout";
import { whishList } from "../pages/home/whishlist";
import { shippingAdd } from "../pages/checkout/shippingAdd";
import { chooseShipping } from "../pages/checkout/chooseShipping";
import { search } from "../pages/search/search";
import { pageOne } from "../pages/onboarding/pageOne/pageOne";
import { pageTwo } from "../pages/onboarding/pageTwo/pageTwo";
import { StartSlider } from "../pages/onboarding/sliderPage/sliderPage";
import { payment } from "../pages/checkout/payment";

export let router = new Navigo("/");

const changePage = (page) => {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(page);
};

export const Router = (route) => {
  router
    .on(Main_Route, () => {
      changePage(pageOne());
    })
    .on(Login_Route, () => {
      changePage(login());
    })
    .on(Cart_Route, () => {
      changePage(cart());
    })
    .on(Home_Route, () => {
      changePage(home());
    })
    .on(Search_Route, () => {
      changePage(search());
    })
    .on(Orders_Route, () => {
      changePage(orders());
    })
    .on(Check_Route, () => {
      changePage(checkout());
    })
    .on(ShippingAdd_Route, () => {
      changePage(shippingAdd());
    })
    .on(ShippingType_Route, () => {
      changePage(chooseShipping());
    })
    .on(Whish_Route, () => {
      changePage(whishList());
    })
    .on(Singel_Route, () => {
      changePage(singelProduct());
    })
    .on(OnboardTwo_Route, () => {
      changePage(pageTwo());
    })
    .on(Slider_Route,()=>{
      changePage(StartSlider())
    })
    .on(pay_route,()=>{
      changePage(payment())
    })
    .on(`/${route}`, () => {
      changePage(brandProducts(route));
    });

  return router;
};
