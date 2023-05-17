import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import LoginLayout from
    "../layouts/LoginLayout/LoginLayout";
import Login from "../pages/login/Login/Login";
import Register from "../pages/login/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        loader: () => fetch("https://travel-guru-server-bay-chi.vercel.app/destination"),
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/",
        element: <LoginLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
])
export default router;