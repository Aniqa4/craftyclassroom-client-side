import React from 'react'
import slider1 from '../../assets/Slider/slider1.jpg'
import slider2 from '../../assets/Slider/slider2.jpg'
import slider3 from '../../assets/Slider/slider3.jpg'
import slider4 from '../../assets/Slider/slider4.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
    return (
        <div className='container mx-auto md:my-10 my-5'>
            <Carousel>
                <div className=' relative'>
                    <img src={slider4} className=' rounded' />
                    <div 
                    className="absolute md:top-1/3 md:mt-16 md:left-10 md:right-10 top-1/4 left-5 right-5 rounded-lg bg-gray-300 opacity-60 md:p-10">
                        <span className=' text-black font-bold md:text-3xl'>Welcome to Crafty Classroom</span>
                        <p className=' text-cyan-950 md:text-base text-xs'>CraftyClassroom is an online platform dedicated to providing a wide range of extracurricular arts and crafts courses.
                            Whether you're a beginner or an experienced artist, our website offers a variety of creative classes and workshops.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={slider2} className=' rounded' />
                    <div className="absolute md:top-1/3 md:mt-16 md:left-10 md:right-10 top-1/4 left-5 right-5 rounded-lg bg-gray-300 opacity-60 md:p-10">
                        <span className=' text-black font-bold md:text-3xl'>Welcome to Crafty Classroom</span>
                        <p className=' text-cyan-950 md:text-base text-xs'>CraftyClassroom is an online platform dedicated to providing a wide range of extracurricular arts and crafts courses.
                            Whether you're a beginner or an experienced artist, our website offers a variety of creative classes and workshops.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={slider3} className=' rounded' />
                    <div className="absolute md:top-1/3 md:mt-16 md:left-10 md:right-10 top-1/4 left-5 right-5 rounded-lg bg-gray-300 opacity-60 md:p-10">
                        <span className=' text-black font-bold md:text-3xl'>Welcome to Crafty Classroom</span>
                        <p className=' text-cyan-950 md:text-base text-xs'>CraftyClassroom is an online platform dedicated to providing a wide range of extracurricular arts and crafts courses.
                            Whether you're a beginner or an experienced artist, our website offers a variety of creative classes and workshops.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={slider1} className=' rounded' />
                    <div className="absolute md:top-1/3 md:mt-16 md:left-10 md:right-10 top-1/4 left-5 right-5 rounded-lg bg-gray-300 opacity-60 md:p-10">
                        <span className=' text-black font-bold md:text-3xl'>Welcome to Crafty Classroom</span>
                        <p className=' text-cyan-950 md:text-base text-xs'>CraftyClassroom is an online platform dedicated to providing a wide range of extracurricular arts and crafts courses.
                            Whether you're a beginner or an experienced artist, our website offers a variety of creative classes and workshops.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;