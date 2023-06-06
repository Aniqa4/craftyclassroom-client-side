import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Classes from "../Components/Classes/Classes";
import Instructor from "../Components/Instructor/Instructor";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/LoginAndRegister/Login";
import Register from "../Components/LoginAndRegister/Register";

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
                path:"/dashboard",
                element:<Dashboard></Dashboard>
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