import React from 'react'
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import TopStudents from './TopStudents';
import Banner from './Banner';

function Home() {
  return (
    <div>
        <Banner></Banner>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <TopStudents></TopStudents>
    </div>
  )
}

export default Home;