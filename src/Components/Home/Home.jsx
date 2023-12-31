import React from 'react'
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import TopStudents from './TopStudents';
import Banner from './Banner';
import Gallery from './Gallery';
import StudentReview from './StudentReview';
import Blogs from './Blogs';

function Home() {
  return (
    <div className=' mt-10 md:mt-0'>
        <Banner></Banner>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <TopStudents></TopStudents>
        <Gallery/>
        <StudentReview/>
        <Blogs/>
    </div>
  )
}

export default Home;