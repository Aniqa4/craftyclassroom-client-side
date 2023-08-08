import React from 'react'

function SliderComponent({image,body}) {
    return (
        <div className=' relative'>
            <img src={image} className=' rounded w-full' />
        </div>
    )
}

export default SliderComponent