import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { FcGoogle } from 'react-icons/fc';
import {AiFillEyeInvisible} from 'react-icons/ai'

function Login() {
  return (
    <div className='container mx-auto my-24 '>
      <SectionTitle title={'Log In to CraftyClassroom'}></SectionTitle>
      <div className=' container mx-auto w-4/12 border rounded-xl p-20 bg-gray-100'>
        <form className=' py-5'>
          <label> Email:</label>
          <input type="text" placeholder="Your Email Address" className="input input-bordered w-full max-w-xs" /><br />
          <label> Password:</label>
          <div className='flex relative'>
            <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs mb-2" /> 
            <span className=' absolute right-10 top-1/4'><AiFillEyeInvisible/></span>
          </div><br />
          <input type="submit" value="Log In" className="input input-bordered w-full max-w-xs" />
        </form>
        <div className="divider">OR</div>
        <button className='flex items-center gap-2 text-xl mx-auto border rounded-full bg-white p-2 px-5'>Log In with Google<FcGoogle /></button>
      </div>
    </div>
  )
}

export default Login;