import { Button } from "../../components/button/button";
import { PrevPage } from "../../components/prevPage/prevPage";
import { Layout } from "../../layouts/layout";
import { loginForm } from "../../templates/login/loginForm";
import { El } from "../../utils/shared/El";

export function login() {
  return El({
    element: "div",
    className: "flex flex-col px-6 h-screen",
    children: [Layout(PrevPage(), loginForm(), Button("Sign In", "signIn"))],
  });
}
