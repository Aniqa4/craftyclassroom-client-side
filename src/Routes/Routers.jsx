import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Classes from "../Components/Classes/Classes";
import Instructor from "../Components/Instructor/Instructor";
import Login from "../Components/LoginAndRegister/Login";
import Register from "../Components/LoginAndRegister/Register";
import AdminDashboard from "../Components/Dashboard/AdminDashboard";
import InstructorDashboard from "../Components/Dashboard/InstructorDashboard";
import StudentDashboard from "../Components/Dashboard/StudentDashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Payment from "../Components/Dashboard/Payment";
import UpdateClass from "../Components/Dashboard/UpdateClass";


const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main> ,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/instructors",
                element:<Instructor></Instructor>
            },
            {
                path:"/classes",
                element:<Classes></Classes>
            },
            {
                path:"/adminDashboard",
                element:<PrivateRoutes><AdminDashboard></AdminDashboard></PrivateRoutes>
            },
            {
                path:"/instructorDashboard",
                element:<PrivateRoutes><InstructorDashboard></InstructorDashboard></PrivateRoutes>
            },
            {
                path:"/studentDashboard",
                element:<PrivateRoutes><StudentDashboard></StudentDashboard></PrivateRoutes>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/payment/:id",
                element:<Payment></Payment>,
                loader:({params})=>fetch(`https://summer-camp-school-server-side-phi.vercel.app/selectedClasses/${params.id}`)
            },
            {
                path:"/updateClass/:id",
                element:<UpdateClass></UpdateClass>,
                loader:({params})=>fetch(`https://summer-camp-school-server-side-phi.vercel.app/allclasses/${params.id}`)
            }
        ]
    }
])

export default router;