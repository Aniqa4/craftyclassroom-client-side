import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MdLogin, MdOutlineLogout } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthProvider';

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
        <div className='flex justify-between items-center px-5 py-3 bg-gray-100 text-cyan-950 fixed top-0 left-0 right-0 z-10 border-cyan-700 border-b-[1px]'>
            <div className='text-3xl font-bold'> Crafty<span className=' text-gray-700'>Classroom</span></div>
            <div className='flex gap-5'>
                <Link to="/">Home</Link>
                <Link to="/instructors">Instructors</Link>
                <Link to="/classes">Classes</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className='flex justify-center'>
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