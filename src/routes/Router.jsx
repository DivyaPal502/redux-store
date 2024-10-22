import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import { lazy } from "react";
const Home =lazy(()=>import("../pages/Home"))
const Cart= lazy(()=>import("../pages/Cart"))


// import Home from "../pages/Home"
// import Cart from "../pages/Cart"

export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:"true",
                element:<Home/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])