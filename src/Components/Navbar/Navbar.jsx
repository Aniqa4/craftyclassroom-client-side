import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='flex justify-between items-center px-5 py-6 bg-gray-100 text-cyan-950 fixed top-0 left-0 right-0 z-10 border-cyan-700 border-b-[1px]'>
            <div className='text-3xl font-bold'> Crafty<span className=' text-gray-700'>Classroom</span></div>
            <div className='flex gap-5'>
                <Link to="/">Home</Link>
                <Link to="/instructors">Instructors</Link>
                <Link to="/classes">Classes</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <div><button className=''><Link to="/login">Login</Link></button></div>
        </div>
    )
}

export default Navbar;