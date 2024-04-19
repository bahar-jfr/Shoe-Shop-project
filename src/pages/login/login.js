import { PrevPage } from "../../components/shared/prevPage/prevPage";
import { Layout } from "../../layouts/layout";
import { loginForm } from "../../templates/login/loginForm";

export function login() {
  const style = "flex flex-col px-6 h-screen";
  return Layout(PrevPage("","/slider","none"), loginForm(),true, "", style);
}
