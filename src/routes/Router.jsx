import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../shared/Secret";
import UpdateProfile from "../components/UpdateProfile";
import Profile from "../components/Profile";
import Setting from "../components/Setting";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/DashBoard/Cart";
import AllUsers from "../pages/DashBoard/AllUsers";
import AddItems from "../pages/DashBoard/AddItems";
import ManageItems from "../pages/DashBoard/ManageItems";
import AdminRoute from "./AdminRoute";

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
            {path:"/secret",element:<PrivateRoute><Secret/></PrivateRoute>},
            {path:"/profile",element: <PrivateRoute><Profile/></PrivateRoute>},
            {path:"/update",element:<PrivateRoute><UpdateProfile/></PrivateRoute>  },
            {path:"/setting",element:<PrivateRoute><Setting/></PrivateRoute>  },
        ])
    },
    {path:"/dashboard",
        element:<PrivateRoute> <Dashboard/></PrivateRoute> ,
        children:[
            // normal user
            {path:"cart",element:<Cart/>},
            // only admin
            {path:"users",element:<AdminRoute> <AllUsers/></AdminRoute>  },
            {path:"addItems",element: <AdminRoute><AddItems/></AdminRoute>   },
            {path:"manageItems",element:<AdminRoute><ManageItems/></AdminRoute>  },
            
        ]
    
    },
   
])
export default router;