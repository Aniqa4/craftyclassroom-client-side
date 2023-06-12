import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

function Login() {
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  const { signIn, googleSignIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    fetch('https://summer-camp-school-server-side-phi.vercel.app/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])

  const { register, handleSubmit, formState: { errors, isValid } } = useForm();
  const onSubmit = data => {
    if (isValid) {
      signIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          const loggedUser = { emai: user.email };
          fetch('http://localhost:5000/jwt', {
            method: 'POST',
            headers:
              { 'content-type': 'application.json' },
            body: JSON.stringify(loggedUser)

          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              localStorage.setItem('access-token', data.token)
            })
          navigate(from, { replace: true })
        })
        .catch(error => {
          console.log(error);
          setError(error.message)
        })

    }

  };

  const handleGoogleSignIn = () => {

    googleSignIn(provider)
      .then(result => {
        const loggedUser = result.user;

        const email = loggedUser.email;
        const existingUser = users.find(x => x.email === email)
        if (!existingUser) {
          const name = loggedUser.displayName;
          const photoURL = loggedUser.photoURL;
          const email = loggedUser.email;
          const role = 'student';
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

        }
        const user = { emai: loggedUser.email };
        fetch('http://localhost:5000/jwt', {
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

        navigate(from, { replace: true })
      })
      .catch(error => {
        setError(error.message)
      })


  }

  return (
    <div className='container mx-auto my-24 '>
      <SectionTitle title={'Log In to CraftyClassroom'}></SectionTitle>
      <div className=' container mx-auto w-4/12 border rounded-xl p-20 bg-gray-100'>
        <form onSubmit={handleSubmit(onSubmit)} className=' py-5'>
          <label> Email:</label>
          <input type="text" {...register("email")} placeholder="Your Email Address" className="input input-bordered w-full" /><br />
          <label> Password:</label>
          <div className='flex relative'>
            <input type="password" {...register("password")} placeholder="Your Password" className="input input-bordered w-full mb-2" />
            <span className=' absolute right-2 top-1/4'><AiFillEyeInvisible /></span>
          </div><br />
          <input type="submit" value="Log In" className="input input-bordered w-full" />
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className='flex items-center gap-2 text-xl mx-auto border rounded-full bg-white py-2 px-5'>Log In with Google<FcGoogle /></button>
        <p className=' text-center mt-10'>Don't have an account? <Link to="/register"><span className='underline'>Register</span></Link></p>
        <p className=' text-center text-red-900 pt-2'>{error}</p>
      </div>
    </div>
  )
}

export default Login;