import React from 'react'
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import TopStudents from './TopStudents';
import Banner from './Banner';
import Gallery from './Gallery';

function Home() {
  return (
    <div>
        <Banner></Banner>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <TopStudents></TopStudents>
        <Gallery/>
    </div>
  )
}

export default Home;