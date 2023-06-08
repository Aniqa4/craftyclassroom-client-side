import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='container mx-auto my-24 '>
      <SectionTitle title={'Sign up to CraftyClassroom'}></SectionTitle>
      <div className=' container mx-auto w-5/12 border rounded-xl p-20 bg-gray-100'>
        <form onSubmit={handleSubmit(onSubmit)} className=' py-5'>
          <div>
            <label> Name:</label>
            <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered w-full" />
            {errors.name && <span className=' text-red-800'>Name field is required</span>}
          </div>
          <div>
            <label> Email:</label>
            <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email Address" className="input input-bordered w-full" />
            {errors.email && <span className=' text-red-800'>Email field is required</span>}
          </div>
          <div>
            <label> Password:</label>
            <div className='flex relative'>
              <input type="password" {...register("password", { required: true })} placeholder="Enter Your Password" className="input input-bordered w-full" />
              <span className=' absolute right-2 top-1/4'><AiFillEyeInvisible /></span>
            </div>
            {errors.password && <span className=' text-red-800'>Password field is required</span>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <div className='flex relative'>
              <input type="password" {...register("confirmPassword", { required: true })}
                placeholder="Confirm Password" className="input input-bordered w-full" />
              <span className=' absolute right-2 top-1/4'><AiFillEyeInvisible /></span>
            </div>
            {errors.confirmPassword && <span className=' text-red-800'>Confirm password field is required</span>}
          </div>
          <label>PhotoURL:</label>
          <input type="photo" {...register("photoURL")} placeholder="Enter Your PhotoURL" className="input input-bordered w-full" />
          <label>Gender:</label>
          <select {...register("gender")} className="input input-bordered w-full">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label>Phone Number:</label>
          <input type="number" {...register("phoneNumber", {
            pattern: "[0-9]{1,3}-[0-9]{1,14}",
          })} placeholder="Enter Your Phone number" className="input input-bordered w-full" />
          <label>Address:</label>
          <input type="address" {...register("address")} placeholder="Enter Your Address" className="input input-bordered w-full" />
          <input type="submit" value="Sign up" className="input input-bordered w-full mt-5" />
        </form>
        <p className=' text-center mt-10'>Already have an account? <Link to="/login"><span className='underline'>Log In</span></Link></p>
      </div>
    </div>
  )
}

export default Register;