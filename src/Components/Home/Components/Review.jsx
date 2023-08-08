import React from 'react';
import { AiFillStar } from 'react-icons/ai';

function Review({ image, name ,course, review}) {
    return (
        <div className=' border flex shadow'>
            <div className='p-2 md:p-5 border md:w-1/4 text-center'>
                <img src={image} className=' w-36 mx-auto' />
                <h1 className=' font-semibold'>Name: {name}</h1>
            </div>
            <div className='p-2 md:p-5 w-3/4'>
                <h1 className=' font-semibold'>Review:</h1>
                <span className=' text-yellow-500 flex'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
                <p className=' font-semibold'>Course Name: {course}</p>
                <p className=' text-gray-500 text-sm'>{review}</p>
            </div>
        </div>
    )
}

export default Review