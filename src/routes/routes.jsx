import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/components/pages/login";
import Home from "@/components/pages/home";
import NotFound from "@/components/pages/404";
import PrivateRoute from "@/middleware/midleware";


const router = createBrowserRouter([
    {
        path: "/login",
        element: < Login/>,
    },
    {
        path: "/home",
        element: ( 
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        ),
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}