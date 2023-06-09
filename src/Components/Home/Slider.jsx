import React from 'react'
import slider1 from '../../assets/Slider/slider1.jpg'
import slider2 from '../../assets/Slider/slider2.jpg'
import slider3 from '../../assets/Slider/slider3.jpg'
import slider4 from '../../assets/Slider/slider4.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
    return (
        <div className='my-10'>
            <Carousel>
                <div className=' relative'>
                    <img src={slider1} className=' rounded' />
                    <div className=" absolute top-1/3 mt-16 left-10 right-10 rounded-lg bg-gray-300 opacity-60 p-10">
                        <span className=' text-black font-bold text-3xl'>Welcome to Crafty Classroom</span>
                        <p className=' text-cyan-950'>CraftyClassroom is an online platform dedicated to providing a wide range of extracurricular arts and crafts courses. 
                            Whether you're a beginner or an experienced artist, our website offers a variety of creative classes and workshops. 
                            Explore painting, drawing, pottery, and more while 
                            connecting with fellow art enthusiasts in our vibrant community. 
                            Ignite your artistic passion and expand your skills with ArtCraft Hub.</p>
                    </div>
                </div>
                <div>
                    <img src={slider2} className=' rounded' />
                    <p className=" absolute top-1/3 mt-20 left-10 right-10 rounded-lg bg-gray-300 opacity-40 p-10">
                        <span className=' text-black font-bold text-3xl'>Welcome to Crafty Classroom</span>
                    </p>
                </div>
                <div>
                    <img src={slider3} className=' rounded' />
                    <p className=" absolute top-1/3 mt-20 left-10 right-10 rounded-lg bg-gray-300 opacity-40 p-10">
                        <span className=' text-black font-bold text-3xl'>Welcome to Crafty Classroom</span>
                    </p>
                </div>
                <div>
                    <img src={slider4} className=' rounded' />
                    <p className=" absolute top-1/3 mt-20 left-10 right-10 rounded-lg bg-gray-300 opacity-40 p-10">
                        <span className=' text-black font-bold text-3xl'>Welcome to Crafty Classroom</span>
                    </p>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;