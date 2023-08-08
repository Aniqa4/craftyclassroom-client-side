import React from 'react'
import slider1 from '../../assets/Slider/slider1.jpg'
import slider2 from '../../assets/Slider/slider2.jpg'
import slider3 from '../../assets/Slider/slider3.jpg'
import slider4 from '../../assets/Slider/slider4.jpg'
import SectionTitle from '../SectionTitle/SectionTitle'
import SliderComponent from './Components/SliderComponent'
import Carousel from 'react-material-ui-carousel'
import SubTitle from '../SectionTitle/SubTitle'

function Slider() {
    return (
        <div className='container mx-auto md:my-10 my-5'>
            <SectionTitle title={'Welcome to Crafty Classroom'}/>
            <SubTitle subTitle={`CraftyClassroom is an online platform dedicated to providing a wide range of extracurricular arts and crafts courses.
                    Whether you're a beginner or an experienced artist, our website offers a variety of creative classes and workshops.`}/>
            <Carousel>
                <SliderComponent image={slider1}/>
                <SliderComponent image={slider2}/>
                <SliderComponent image={slider4}/>
                <SliderComponent image={slider3}/>
            </Carousel>
        </div>
    )
}

export default Slider;