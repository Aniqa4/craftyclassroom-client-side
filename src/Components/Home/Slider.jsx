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
                    <p className=" absolute top-1/3 mt-20 left-10 right-10 rounded-lg bg-gray-300 opacity-40 p-10">
                        <span className=' text-black font-bold text-3xl'>Welcome to Crafty Class Room</span>
                    </p>
                </div>
                <div>
                    <img src={slider2} className=' rounded' />
                    <p className=" absolute top-1/3 mt-20 left-10 right-10 rounded-lg bg-gray-300 opacity-40 p-10">
                        <span className=' text-black font-bold text-3xl'>Welcome to Crafty Class Room</span>
                    </p>
                </div>
                <div>
                    <img src={slider3} className=' rounded' />
                    <p className=" absolute top-1/3 mt-20 left-10 right-10 rounded-lg bg-gray-300 opacity-40 p-10">
                        <span className=' text-black font-bold text-3xl'>Welcome to Crafty Class Room</span>
                    </p>
                </div>
                <div>
                    <img src={slider4} className=' rounded' />
                    <p className=" absolute top-1/3 mt-20 left-10 right-10 rounded-lg bg-gray-300 opacity-40 p-10">
                        <span className=' text-black font-bold text-3xl'>Welcome to Crafty Class Room</span>
                    </p>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;