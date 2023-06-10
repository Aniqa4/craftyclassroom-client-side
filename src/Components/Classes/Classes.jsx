import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import slider4 from '../../assets/Slider/slider4.jpg';
import SubTitle from '../SectionTitle/SubTitle';



function Classes() {

  const [approvedClasses, setApprovedClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/approvedClasses')
      .then(res => res.json())
      .then(data => {
        setApprovedClasses(data)
      })
  }, [])

  console.log(approvedClasses);

  return (
    <div className=' md:container md:mx-auto mx-5 my-24'>
      <SectionTitle title={'ALL CLASSES'}></SectionTitle>
      <SubTitle subTitle={'Select Your Desired Class'}></SubTitle>
      <div className='grid md:grid-cols-3 md:gap-20 gap-5'>
        {
          approvedClasses.map(x =>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={x.classImage} className="rounded-xl md:h-56" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{x.className}</h2>
                <p>-By <span className=' font-semibold'>{x.name}</span></p>
                <p>Available Seats : {x.availableSeats}</p>
                <p>Price : {x.price}$</p>
                <div className="card-actions">
                  <button className="btn bg-gray-200 text-cyan-950">Select</button>
                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Classes;