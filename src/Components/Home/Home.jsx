import React from 'react'
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import TopStudents from './TopStudents';

function Home() {
  return (
    <div className=' container mx-auto md:my-24'>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <TopStudents></TopStudents>
    </div>
  )
}

export default Home;