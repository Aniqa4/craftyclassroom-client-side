import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdLogin, MdOutlineLogout } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthProvider';
import { HiHome } from 'react-icons/hi';
import ActiveRoute from '../../ActiveRoute/ActiveRoute';
import { FiSun } from 'react-icons/fi';
import { MdDarkMode } from 'react-icons/md';
import {AiOutlineUserAdd} from 'react-icons/ai';
import Menu from './Menu';



function Navbar() {
    const { user, logOut, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);


    if (loading) {
        return <div className='flex justify-center'><span className="loading loading-spinner loading-lg"></span></div>
    }


    const handleSignOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('access-token')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);

            })
    }


    return (
        <>
            <div
                className='hidden lg:flex justify-between items-center  gap-3 px-5 py-3 bg-gray-100 text-cyan-950 fixed top-0 left-0 right-0 z-10 shadow'>
                <div className='text-3xl font-bold'> Crafty<span className=' text-gray-700'>Classroom</span></div>
                <div className='flex gap-5'>
                    <ActiveRoute to="/"><span className=' text-xl'><HiHome /></span></ActiveRoute>
                    <ActiveRoute to="/instructors">Instructors</ActiveRoute>
                    <ActiveRoute to="/classes">Courses</ActiveRoute>
                    {
                        user && <ActiveRoute to="/dashboard">Dashboard</ActiveRoute>
                    }
                </div>
                <div className='flex justify-center gap-5'>
                    <button>
                        <label className="swap swap-rotate w-12 h-12">
                            <input
                                type="checkbox"
                                onChange={handleToggle}
                                // show toggle image based on localstorage theme
                                checked={theme === "light" ? false : true}
                            />
                            {/* light theme sun image */}
                            <span className="w-8 h-8 swap-on text-xl flex justify-center items-center "><FiSun /></span>
                            {/* dark theme moon image */}
                            <span className="w-8 h-8 swap-off text-xl flex justify-center items-center "><MdDarkMode /></span>
                        </label>
                    </button>
                    {
                        user && <img src={user.photoURL} className=' me-2 rounded-full' style={{ width: "46px", height: "46px" }} title={user.displayName} />
                    }
                    {
                        user ?
                            <button onClick={handleSignOut} className=' text-3xl pr-10'>
                                <Link to='/login'><MdOutlineLogout /></Link>
                            </button> : <button className=' text-3xl pr-10'><Link to="/login"><AiOutlineUserAdd/></Link></button>
                    }
                </div>
            </div>
            <div className='lg:hidden flex justify-between items-baseline fixed top-0 left-0 right-0 z-10 shadow  bg-gray-100 py-5 px-5'>
                <Link to="/">
                    <div className='text-xl font-bold '> Crafty<span className=' text-gray-700'>Classroom</span></div>
                </Link>
                {
                    user ?
                        <p onClick={handleSignOut} className=' text-sm bg-slate-500 text-white px-3 py-1 rounded shadow'>
                            <Link to='/login'>Log Out</Link>
                        </p> : <p className='text-xl'><Link to="/login"><AiOutlineUserAdd/></Link></p>
                }
                <Menu />
            </div>
        </>
    )
}

export default Navbar;