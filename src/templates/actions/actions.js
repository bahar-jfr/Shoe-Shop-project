import { ActionIcon } from "../../components/actionIcon/actionIcon";
import { El } from "../../utils/shared/El";

export function actions(){
    return El({
        element: "div",
        className: "flex items-center justify-between px-6",
        children:[
            ActionIcon("Home"),
            ActionIcon("Cart"),
            ActionIcon("Orders"),
            ActionIcon("Wallet"),
            ActionIcon("Profile")
        ]
    })
}