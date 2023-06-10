import React from 'react'

function SectionTitle({ title }) {
  return (
    <div
      className=' text-center md:text-2xl text-xl  font-bold bg-gray-100 py-3 text-cyan-950 my-5 rounded-3xl uppercase'>
      {title}
      </div>
  )
}

export default SectionTitle;