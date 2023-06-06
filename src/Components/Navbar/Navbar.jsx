import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='flex justify-between items-center px-5 py-6 bg-gray-200 text-cyan-950'>
            <div className='text-3xl font-bold'> Ethnic<span className=' text-gray-700'>Elegance</span></div>
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