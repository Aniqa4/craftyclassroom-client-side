import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';


function InstructorDashboard() {
  const { user, loading } = useContext(AuthContext);
  const [allClasses, setAllClasses] = useState([]);

  
  useEffect(() => {
    fetch('https://summer-camp-school-server-side-phi.vercel.app/allclasses',{
      method:'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        setAllClasses(data)

      })
  }, [])

  if (loading) {
    <div>............</div>
  }

  const myClasses = allClasses.filter(x => x.email === user.email)
  //console.log(myClasses);



  return (
    <div className='container mx-auto my-24 '>
      <SectionTitle title={'Instructor Information'}></SectionTitle>
      <div className='grid grid-cols-1 px-2'>
        <img src={user.photoURL} className='rounded w-2/12' />
        <h1 className=' md:text-3xl font-semibold'>{user.displayName}</h1>
        <p>Email : {user.email}</p>
        <Link to="/addClass"><button className='btn my-10'>Add a class <span className=' text-2xl'><GrAddCircle/></span> </button></Link>
      </div>
      <div >
        <SectionTitle title={'My classes'}></SectionTitle>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 mt-10 px-2'>
          {
            myClasses.map((singleClass, index) =>

              <div key={index} className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={singleClass.classImage}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{singleClass.className}</h2>
                  <p>Available Seats : {singleClass.availableSeats}</p>
                  <p>Total enrolled students : {singleClass.totalEnrolledStudents}</p>
                  <p>Price : {singleClass.price}$</p>
                  <p className=' bg-yellow-100'>Status : {singleClass.status}</p>
                  <p>Feedback : {singleClass.feedback}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/updateClass/${singleClass._id}`}> <button className="btn ">Update</button></Link>
                  </div>
                </div>
              </div>)
          }
        </div>
      </div>


    </div>
  )
}

export default InstructorDashboard;