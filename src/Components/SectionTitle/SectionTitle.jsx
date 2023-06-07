import React from 'react'

function SectionTitle({ title }) {
  return (
    <div
      className=' text-center text-2xl font-bold bg-gray-100 py-3 text-cyan-950 my-5 border-cyan-700 border-t-[1px] border-b-[1px]'>
      {title}
      </div>
  )
}

export default SectionTitle;