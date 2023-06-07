import React from 'react'
import Slider from './Slider';
import PopularClasses from './PopularClasses';

function Home() {
  return (
    <div className=' container mx-auto my-24'>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
    </div>
  )
}

export default Home;