import { Router } from "./src/routes/routes";
import "./style.css";

if (location.pathname === "/") {
  Router().navigate("/");
} else {
  Router().navigate(location.pathname);
}


