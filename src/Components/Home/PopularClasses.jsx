import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import slider4 from '../../assets/Slider/slider4.jpg';

function PopularClasses() {
  return (
    <div>
      <SectionTitle title={'Popular Classes'}></SectionTitle>
      <div className="card w-96 glass">
        <figure><img src={slider4} alt="car!" /></figure>
        <div className="card-body">
          <h2 className="card-title">Class Name:</h2>
          <p>Number of Students:</p>
        </div>
      </div>
    </div>
  )
}

export default PopularClasses;