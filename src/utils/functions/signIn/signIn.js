import { get } from "../../../api/get/get";
import { Router } from "../../../routes/routes";
import { setCookie } from "../../cookie/cookie";

export function btnSingIn(e) {
  if (e.target.id === "signIn") {
    const inputEmail = document.getElementById("Email");
    const inputPass = document.getElementById("Password");
    const inputRemember = document.getElementById("checkbox");
    get("users").then((res) => {
      if (
        inputPass.value == res.data[0].password &&
        inputEmail.value == res.data[0].email
      ) {
        setCookie("email", inputEmail.value, inputRemember.checked ? 7 : "session");
        Router().navigate("/home");
      }
    });
  }
}