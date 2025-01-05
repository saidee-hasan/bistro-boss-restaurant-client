import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:([
            {path:"/",element:<Home/>},
            {path:"/menu",element:<Menu/>},
        ])
    }
])
export default router;