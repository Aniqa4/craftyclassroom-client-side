import React from 'react';
import { Fade } from "react-awesome-reveal";

function SectionTitle({ title }) {
  return (
    <Fade>
      <div
        className=' text-center md:text-2xl  font-bold bg-gray-100 py-3 text-cyan-950 my-5 uppercase'>
        {title}
      </div>
    </Fade>
  )
}

export default SectionTitle;