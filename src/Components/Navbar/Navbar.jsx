import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MdLogin, MdOutlineLogout } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthProvider';
import { HiHome } from 'react-icons/hi';
import ActiveRoute from '../../ActiveRoute/ActiveRoute';

function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div 
        className='md:flex md:justify-between md:items-center grid gap-3 px-5 py-3 bg-gray-100 text-cyan-950 md:fixed top-0 left-0 right-0 z-10 border-cyan-700 border-b-[1px]'>
            <div className='text-3xl font-bold'> Crafty<span className=' text-gray-700'>Classroom</span></div>
            <div className='md:flex grid md:gap-20 gap-2'>
                <ActiveRoute to="/"><span className=' text-xl'><HiHome/></span></ActiveRoute>
                <ActiveRoute to="/instructors">Instructors</ActiveRoute>
                <ActiveRoute to="/classes">Classes</ActiveRoute>
                <ActiveRoute to="/adminDashboard">Admin Dashboard</ActiveRoute>
                <ActiveRoute to="/instructorDashboard">Instructor Dashboard</ActiveRoute>
                <ActiveRoute to="/studentDashboard">Student Dashboard</ActiveRoute>
            </div>
            <div className='flex md:justify-center'>
                {
                    user && <img src={user.photoURL} className=' me-2 rounded-full' style={{ width: "46px", height: "46px" }} title={user.displayName} />
                }
                {
                    user ?
                        <button onClick={handleSignOut} className=' text-3xl pr-10'>
                            <Link to='/login'><MdOutlineLogout/></Link>
                        </button> : <button className=' text-3xl pr-10'><Link to="/login"><MdLogin /></Link></button>
                }
            </div>
        </div>
    )
}

export default Navbar;