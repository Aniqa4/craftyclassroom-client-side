import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Classes from "../Components/Classes/Classes";
import Instructor from "../Components/Instructor/Instructor";
import Login from "../Components/LoginAndRegister/Login";
import Register from "../Components/LoginAndRegister/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Payment from "../Components/Dashboard/Student/Payment";
import UpdateClass from "../Components/Dashboard/Instructor/UpdateClass";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Dashboard from "../Components/Dashboard/Dashboard";
import Feedback from "../Components/Dashboard/Admin/feedback";
import AddClass from "../Components/Dashboard/Instructor/AddClass";
import PaymentHistory from "../Components/Dashboard/Student/PaymentHistory";


const router = createBrowserRouter([{
    path: "*",
    element:<ErrorPage></ErrorPage>
},
{
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/instructors",
            element: <Instructor></Instructor>
        },
        {
            path: "/classes",
            element: <Classes></Classes>
        },
        {
            path:'/dashboard',
            element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
        },
        {
            path:"/payment-history",
            element:<PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>

        },
        {
            path:"/feedback/:id",
            element:<PrivateRoutes><Feedback></Feedback></PrivateRoutes>,
            loader: ({ params }) => fetch(`https://summer-camp-school-server-side-phi.vercel.app/allclasses/${params.id}`)
        },
        {
            path:"/addClass",
            element:<PrivateRoutes><AddClass></AddClass></PrivateRoutes>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/payment/:id",
            element: <Payment></Payment>,
            loader: ({ params }) => fetch(`https://summer-camp-school-server-side-phi.vercel.app/selectedClasses/${params.id}`)
        },
        {
            path: "/updateClass/:id",
            element: <UpdateClass></UpdateClass>,
            loader: ({ params }) => fetch(`https://summer-camp-school-server-side-phi.vercel.app/allclasses/${params.id}`)
        }
    ]
}
])

export default router;