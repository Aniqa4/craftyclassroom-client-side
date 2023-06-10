import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';


function PopularClasses() {
  const [approvedClasses, setApprovedClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/popularClasses')
      .then(res => res.json())
      .then(data => {
        setApprovedClasses(data)
      })
  }, [])
  return (
    <div>
      <SectionTitle title={'Popular Classes'}></SectionTitle>
      <div className='flex grid-cols-2 justify-around gap-10 my-20 '>
        {
          approvedClasses.map(popularClasses =>
            <div className="card w-96 glass">
              <figure><img src={popularClasses.classImage} className='w-full h-40' /></figure>
              <div className=" px-5 py-10">
                <h2 className="text-cyan-950 font-semibold">{popularClasses.className}</h2>
                <p className='text-gray-500'>Number of Students: {popularClasses.totalEnrolledStudents}</p>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default PopularClasses;