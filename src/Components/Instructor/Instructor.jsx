import React from 'react';
import slider4 from '../../assets/Slider/slider4.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';

function Instructor() {
  return (
    <div className='container mx-auto my-24'>
      <SectionTitle title={'All Instructors'}></SectionTitle>
      <div className='grid grid-cols-2 gap-20'>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src={slider4} className='' /></figure>
          <div className="card-body">
            <h1>Name:</h1>
            <p>Email:</p>
            <div className="card-actions justify-end">
              <button className="btn bg-gray-200 text-cyan-950 font-bold">See Classes</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src={slider4} /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src={slider4} /></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructor;