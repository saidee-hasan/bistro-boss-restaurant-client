import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:([
            {path:"/",element:<Home/>},
            {path:"/menu",element:<Menu/>},
            {path:"/order/:category",element:<Order/>},
        ])
    }
])
export default router;