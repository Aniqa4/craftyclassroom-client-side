import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import one from '../../assets/Gallery/1.jpg'
import two from '../../assets/Gallery/2.jpg'
import three from '../../assets/Gallery/3.jpg'
import four from '../../assets/Gallery/4.jpg'
import five from '../../assets/Gallery/5.jpg'
import six from '../../assets/Gallery/6.jpg'
import seven from '../../assets/Gallery/7.jpg'
import eight from '../../assets/Gallery/8.jpg'
import nine from '../../assets/Gallery/9.jpg'
import SubTitle from '../SectionTitle/SubTitle';

function Gallery() {
  return (
    <div className=' container mx-auto'>
        <SectionTitle title={'Gallery'}/>
        <SubTitle subTitle={'Our Gallery of Artistry and Craftsmanship'}/>
        <div className=' grid grid-cols-3 gap-2 my-10'>
            <img src={one} />
            <img src={two} />
            <img src={three} />
            <img src={five} />
            <img src={six} />
            <img src={seven} />
            <img src={eight} />
            <img src={nine} />
            <img src={four} />
        </div>
    </div>
  )
}

export default Gallery