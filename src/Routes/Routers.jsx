import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Classes from "../Components/Classes/Classes";
import Instructor from "../Components/Instructor/Instructor";
import Login from "../Components/LoginAndRegister/Login";
import Register from "../Components/LoginAndRegister/Register";
import InstructorDashboard from "../Components/Dashboard/InstructorDashboard";
import StudentDashboard from "../Components/Dashboard/StudentDashboard";
import AdminDashboard from "../Components/Dashboard/AdminDashboard";

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
                path:"/instructorDashboard",
                element:<InstructorDashboard></InstructorDashboard>
            },
            {
                path:"/studentDashboard",
                element:<StudentDashboard></StudentDashboard>
            },
            {
                path:"/adminDashboard",
                element:<AdminDashboard></AdminDashboard>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ]
    }
])

export default router;