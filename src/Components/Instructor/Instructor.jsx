import React, { useEffect, useState } from 'react';
import slider4 from '../../assets/Slider/slider4.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';

function Instructor() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allinstructors')
      .then(res => res.json())
      .then(data => {
        setInstructors(data)
      })
  }, [])
  console.log(instructors);

  return (
    <div className='container mx-auto my-24'>
      <SectionTitle title={'All Instructors'}></SectionTitle>
      <div className='grid grid-cols-2 gap-20'>
        {
          instructors.map(instructor =>
            <div key={instructor._id} className="card card-side bg-base-100 shadow-xl">
              <figure><img src={instructor.photoURL} className='w-56' /></figure>
              <div className="card-body" >
                <h1>Name: {instructor.name}</h1>
                <p>Email: {instructor.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn bg-gray-200 text-cyan-950 font-bold">See Classes</button>
                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Instructor;