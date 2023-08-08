import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import SubTitle from '../SectionTitle/SubTitle'
import Review from './Components/Review';
import image from '../../assets/student/student.jpg'

function StudentReview() {
  return (
    <div className=' container mx-auto'>
        <SectionTitle title={'Student Success Stories'}/>
        <SubTitle subTitle={'Inspiring Journeys through Our Courses'}/>
        <div className='m-2 md:m-5'>
            <Review image={image} name={'Emily G.'} course={'Watercolor Wonders'}
            review={`I'm so glad I found CraftyClassroom! The "Watercolor Wonders" course was an eye-opener. The instructor's guidance made learning watercolor art enjoyable and approachable. The well-organized materials and clear videos helped me improve my skills, and now I'm creating art I never thought possible. [Website Name] has boosted my artistic confidence!`}/>
            <Review image={image} name={'Alex M.'} course={'Digital Art Essentials'}
            review={`CraftyClassroom's "Digital Art Essentials" course was my perfect starting point for digital art. The instructor's expertise and engaging teaching style made learning tools and techniques easy. The course community's interaction kept me motivated. I'm loving the digital art I'm creating and can't wait to explore more thanks to crafty classroom.`}/>
            <Review image={image} name={'Alex G.'} course={'Woodworking Fundamentals'}
            review={`Enrolling in CraftyClassroom's "Woodworking Fundamentals" course exceeded my expectations. Expert instruction, comprehensive materials, and a focus on safety helped me grasp woodworking intricacies. As a woodworking novice, I now proudly craft functional pieces. CraftyClassroom isn't just education; it's a passionate community. Can't wait for advanced projects!`}/>
        </div>
    </div>
  )
}

export default StudentReview