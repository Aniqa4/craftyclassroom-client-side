import React from 'react';
import banner from '../../assets/Banner/banner.png';
import { BsArrowBarDown } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className=' relative'>
            <img src={banner} className=' h-fit w-full' />
            <div className=' absolute left-0 right-0 top-1/4 text-center'>
                <h1
                    className=' md:text-4xl lg:text-7xl font-extrabold pb-10'>
                    <TypeAnimation sequence={['Discover the Joy of Crafting at Crafty Classroom', 500]} />
                </h1>
                <button className='btn shadow'><Link to='login'>Join us</Link></button>&nbsp;
                <button className='btn shadow'><Link to={'classes'}>Visit courses</Link></button>
            </div>
            <p className='hidden absolute bottom-0 lg:bottom-1/4 left-0 right-0 md:flex justify-center text-5xl text-slate-400'><BsArrowBarDown /></p>
        </div>
    )
}

export default Banner