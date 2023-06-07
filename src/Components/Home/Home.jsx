import React from 'react'
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';

function Home() {
  return (
    <div className=' container mx-auto my-24'>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
    </div>
  )
}

export default Home;