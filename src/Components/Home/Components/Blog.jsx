import React from 'react'

function Blog({title,description}) {
  return (
    <div className=' py-2'>
        <h1 className='text-center font-semibold'>{title}</h1>
        <p className=' text-sm text-gray-500'>{description}</p>
    </div>
  )
}

export default Blog