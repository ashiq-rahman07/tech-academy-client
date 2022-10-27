import { createBrowserRouter } from "react-router-dom";
import CardDetails from "../components/CardDetails";
import Checkout from "../components/Checkout";
import Main from "../Layaout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('https://lerning-server-as-10.vercel.app/course-details')
            },
            {
                path: '/course-details/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`https://lerning-server-as-10.vercel.app/course-details/${params.id}`)

            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path:'/checkout',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            }
        ]
    }
])