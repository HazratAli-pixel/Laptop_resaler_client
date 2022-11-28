import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import DisplayProducts from "../../Pages/Shared/DisplayProducts/DisplayProducts";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            // {
            //     path: '/category',
            //     element: <PrivateRoute><DisplayProducts></DisplayProducts></PrivateRoute> ,
            // }
            {
                path: 'category/:category',
                loader: async ({params})=>{
                    return fetch(`https://laptop-reseler-server-side-hazratali-pixel.vercel.app/products/category/${params.category}`)
                },
                element: <PrivateRoute><DisplayProducts></DisplayProducts></PrivateRoute> ,
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <MyAppointment></MyAppointment>
            // },
            // {
            //     path: '/dashboard/allusers',
            //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            // },
            // {
            //     path: '/dashboard/adddoctor',
            //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            // },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({params}) => fetch(`https://doctors-portal-server-rust.vercel.app/bookings/${params.id}`)
            // },
        ]
    }
])

export default router;