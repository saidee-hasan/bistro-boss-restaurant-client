import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:([
            {path:"/",element:<Home/>},
            {path:"/menu",element:<Menu/>},
            {path:"/order/:category",element:<Order/>},
            {path:"/login",element:<Login/>},
            {path:"/register",element:<Register/>},
        ])
    },
   
])
export default router;