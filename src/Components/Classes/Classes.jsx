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
    <div className=' container mx-auto my-24'>
      <SectionTitle title={'ALL CLASSES'}></SectionTitle>
      <SubTitle subTitle={'Select Your Desired Class'}></SubTitle>
      <div className='grid grid-cols-4 gap-20'>
        {
          approvedClasses.map(x =>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={x.classImage} className="rounded-xl w-96 h-56" />
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