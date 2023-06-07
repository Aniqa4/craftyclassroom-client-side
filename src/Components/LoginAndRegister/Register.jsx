import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='container mx-auto my-24 '>
      <SectionTitle title={'Sign up to CraftyClassroom'}></SectionTitle>
      <div className=' container mx-auto w-5/12 border rounded-xl p-20 bg-gray-100'>
        <form className=' py-5'>
          <label> Name:</label>
          <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full" />
          <label> Email:</label>
          <input type="email" placeholder="Enter Your Email Address" className="input input-bordered w-full" />
          <label> Password:</label>
          <div className='flex relative'>
            <input type="password" placeholder="Enter Your Password" className="input input-bordered w-full" />
            <span className=' absolute right-2 top-1/4'><AiFillEyeInvisible /></span>
          </div>
          <label>Confirm Password:</label>
          <div className='flex relative'>
            <input type="password" placeholder="Confirm Password" className="input input-bordered w-full" />
            <span className=' absolute right-2 top-1/4'><AiFillEyeInvisible /></span>
          </div>
          <label>PhotoURL:</label>
          <input type="photo" placeholder="Enter Your PhotoURL" className="input input-bordered w-full" />
          <label>Gender:</label>
          <input type="text" placeholder="Enter Your Gender" className="input input-bordered w-full" />
          <label>Phone Number:</label>
          <input type="number" pattern="[0-9]*" placeholder="Enter Your Phone number" className="input input-bordered w-full" />
          <label>Address:</label>
          <input type="address" placeholder="Enter Your Address" className="input input-bordered w-full" />
          <input type="submit" value="Sign up" className="input input-bordered w-full mt-5" />
        </form>
        <p className=' text-center mt-10'>Already have an account? <Link to="/login"><span className='underline'>Log In</span></Link></p>
      </div>
    </div>
  )
}

export default Register;