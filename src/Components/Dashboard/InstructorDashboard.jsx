import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import SectionTitle from '../SectionTitle/SectionTitle';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function InstructorDashboard() {
  const { user, loading } = useContext(AuthContext);
  const [allClasses, setAllClasses] = useState([]);

  if (loading) {
    <div>............</div>
  }
  useEffect(() => {
    fetch('http://localhost:5000/allclasses')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAllClasses(data)

      })
  }, [])

  const myClasses = allClasses.filter(x => x.email === user.email)
  console.log(myClasses);

  const handleAddClass = (e) => {
    e.preventDefault();

    const form = e.target;
    const className = form.className.value;
    const classImage = form.classImage.value;
    const name = form.name.defaultValue;
    const email = form.email.defaultValue;
    const availableSeats = form.availableSeats.value;
    const price = form.price.value;
    const status = 'pending';
    const totalEnrolledStudents = 0;
    const feedback = 'No feedback yet.'
    const newClass = { className, classImage, name, email, availableSeats, price, status, totalEnrolledStudents, feedback }
    console.log('clicked', newClass);

    fetch('http://localhost:5000/newClass', {
      method: 'POST',
      headers:
        { 'content-type': 'application/json' },
      body: JSON.stringify(newClass)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

      })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Toy has been deleted',
      showConfirmButton: false,
      timer: 1500

    })
    form.reset()

  }


  return (
    <div className='container mx-auto md:my-24 '>
      <SectionTitle title={'Instructor Information'}></SectionTitle>
      <div className='grid grid-cols-1'>
        <img src={user.photoURL} className='rounded' />
        <h1 className=' text-3xl font-semibold'>{user.displayName}</h1>
        <p>Email : {user.email}</p>
        <button className='btn my-10'>Add a class</button>
      </div>
      <form onSubmit={handleAddClass} className='grid grid-cols-1 gap-5 w-6/12 mx-auto border rounded-xl'>
        <input type="text" name="className" placeholder="Class Name" className="input input-bordered input-accent " />
        <input type="text" name="classImage" placeholder="Class Cover Photo url" className="input input-bordered input-accent" />
        <input type="text" name="name" defaultValue={user.displayName} disabled className="input input-bordered input-accent" />
        <input type="email" name="email" defaultValue={user.email} disabled className="input input-bordered input-accent" />
        <input type="number" pattern="[789][0-9]{9}" name="price" placeholder="Enter Price($)" className="input input-bordered input-accent" />
        <input type="number" pattern="[789][0-9]{9}" name="availableSeats"
          placeholder="Enter Total Seats(max 20)" className="input input-bordered input-accent" />
        <input type="Submit" value="ADD" className='btn' />
      </form>

      <div >
        <SectionTitle title={'My classes'}></SectionTitle>
        <div className='grid grid-cols-3 gap-20 mt-10'>
          {
            myClasses.map((singleClass,index) =>

              <div key={index} className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={singleClass.classImage} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{singleClass.className}</h2>
                  <p>Available Seats : {singleClass.availableSeats}</p>
                  <p>Total enrolled students : {singleClass.totalEnrolledStudents}</p>
                  <p>Price : {singleClass.price}$</p>
                  <p>Status : {singleClass.status}</p>
                  <p>Feedback : {singleClass.feedback}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/updateClass/${singleClass._id}`}><button className="btn ">Update</button></Link>
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