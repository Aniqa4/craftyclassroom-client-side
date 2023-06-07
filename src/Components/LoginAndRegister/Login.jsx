import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { FcGoogle } from 'react-icons/fc';
import {AiFillEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container mx-auto my-24 '>
      <SectionTitle title={'Log In to CraftyClassroom'}></SectionTitle>
      <div className=' container mx-auto w-4/12 border rounded-xl p-20 bg-gray-100'>
        <form className=' py-5'>
          <label> Email:</label>
          <input type="text" placeholder="Your Email Address" className="input input-bordered w-full" /><br />
          <label> Password:</label>
          <div className='flex relative'>
            <input type="password" placeholder="Your Password" className="input input-bordered w-full mb-2" /> 
            <span className=' absolute right-2 top-1/4'><AiFillEyeInvisible/></span>
          </div><br />
          <input type="submit" value="Log In" className="input input-bordered w-full" />
        </form>
        <div className="divider">OR</div>
        <button className='flex items-center gap-2 text-xl mx-auto border rounded-full bg-white py-2 px-5'>Log In with Google<FcGoogle /></button>
        <p className=' text-center mt-10'>Don't have an account? <Link to="/register"><span className='underline'>Register</span></Link></p>
      </div>
    </div>
  )
}

export default Login;