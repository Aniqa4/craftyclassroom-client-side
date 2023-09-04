import React from 'react';
import banner from '../../assets/Banner/banner2.jpg';
import { BsArrowBarDown } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div>
            <div className=' relative text-white'>
                <img src={banner} className=' w-full lg:h-screen opacity-70' />
                <div className=' absolute left-0 right-0 md:top-1/2 top-1/3 text-center'>
                    <h1
                        className=' md:text-3xl lg:text-5xl font-extrabold pb-10'>
                        <TypeAnimation sequence={['Discover the Joy of Crafting and Art at Crafty Classroom', 500]} />
                    </h1>
                    <button className='md:btn btn-sm shadow'><Link to='login'>Join us</Link></button>&nbsp;
                    <button className='md:btn btn-sm shadow'><Link to={'classes'}>Visit courses</Link></button>
                </div>
                <p className='hidden absolute bottom-0 lg:bottom-1/4 left-0 right-0 justify-center text-5xl'><BsArrowBarDown /></p>
            </div>
        </div>
    )
}

export default Banner