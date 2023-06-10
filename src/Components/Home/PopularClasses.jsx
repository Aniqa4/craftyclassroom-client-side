import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import SubTitle from '../SectionTitle/SubTitle';


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
      <SubTitle subTitle={'Discover Trending Classes'}></SubTitle>
      <div className='md:flex grid grid-cols-2 gap-3 justify-around md:gap-10 md:my-20 mx-3 '>
        {
          approvedClasses.map(popularClasses =>
            <div key={popularClasses._id} className="card md:w-96 glass">
              <figure><img src={popularClasses.classImage} className='w-full md:h-40 h-28' /></figure>
              <div className=" p-2 md:py-10 md:px-5">
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