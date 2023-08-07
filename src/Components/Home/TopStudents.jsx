import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import SubTitle from '../SectionTitle/SubTitle';

function TopStudents() {
    const [topStudents, setTopStudents] = useState([]);

  useEffect(() => {
    fetch('https://summer-camp-school-server-side-phi.vercel.app/threeStudents')
      .then(res => res.json())
      .then(data => {
        setTopStudents(data)
      })
  }, [])
  return (
    <div className='container mx-auto'>
      <SectionTitle title={'Our Top students'}></SectionTitle>
      <SubTitle subTitle={''}></SubTitle>
      <div className='md:flex grid grid-cols-2 gap-3 justify-around md:gap-10 md:my-20 mx-3 '>
        {
          topStudents.map(x =>
            <div key={x._id} className="">
              <figure><img src={x.photoURL} className='w-40 rounded-full' /></figure>
              <div className=" p-2 md:py-10 md:px-5">
                <h2 className="text-cyan-950 font-semibold">{x.name}</h2>
                <p className='text-gray-500'>Email: {x.email}</p>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default TopStudents