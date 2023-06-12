import React, { useContext, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext, auth } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const { signUp } = useContext(AuthContext);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [error, setError] = useState('')
  const [users, setUsers] = useState([])


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  fetch('https://summer-camp-school-server-side-phi.vercel.app/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUsers(data)
    })


  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    const email = data.email;
    const gender = data.gender;
    const phoneNumber = data.phoneNumber;
    const address = data.address;
    const role = 'student';

    if (isValid) {
      if (data.password === data.confirmPassword) {
        signUp(data.email, data.password)
          .then(result => {
            const loggedUser = result.user;
            //console.log(loggedUser);
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photoURL,
              gender: gender,
              phoneNumber: phoneNumber,
              address: address
            })
            
            

            const newUser = { name, email, photoURL, role }
            fetch('https://summer-camp-school-server-side-phi.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(newUser)
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
              })
              .then(() => {
                setUsers([...users, newUser]);
                navigate(from, { replace: true })
              })

            const user = { emai: loggedUser.email };
            fetch('https://summer-camp-school-server-side-phi.vercel.app/jwt', {
              method: 'POST',
              headers:
                { 'content-type': 'application.json' },
              body: JSON.stringify(user)

            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                localStorage.setItem('access-token', data.token)
              })

            setConfirmPassword(false);
            setError('');
            
          })
          .catch(error => {
            console.log(error);
            setError(error.message)
          })
      } else {
        setConfirmPassword(true);
      }
    }
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
            <input type="password" {...register("password", { required: true })} placeholder="Enter Your Password" className="input input-bordered w-full" />
            {errors.password && <span className=' text-red-800'>Password field is required</span>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" {...register("confirmPassword", { required: true })}
              placeholder="Confirm Password" className="input input-bordered w-full" />
            {errors.confirmPassword && <span className=' text-red-800'>Please comfirm your password</span>}
            {confirmPassword && <span className=' text-red-800'>Passwords do not match</span>}
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
        <p className=' text-center text-red-900 pt-2'>{error}</p>
      </div>
    </div>
  )
}

export default Register;