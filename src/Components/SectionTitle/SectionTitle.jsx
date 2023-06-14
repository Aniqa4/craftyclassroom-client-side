import React from 'react';
import { Fade } from "react-awesome-reveal";

function SectionTitle({ title }) {
  return (
    <Fade>
      <div
        className=' text-center md:text-2xl text-xl  font-bold bg-gray-100 py-3 text-cyan-950 my-5 rounded-3xl uppercase'>
        {title}
      </div>
    </Fade>
  )
}

export default SectionTitle;