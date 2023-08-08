import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import SubTitle from '../SectionTitle/SubTitle'
import Blog from './Components/Blog'

function Blogs() {
    return (
        <div className=' container mx-auto mb-10'>
            <SectionTitle title={'Blogs'} />
            <div>
                <div className=' px-5 shadow pb-5'>
                    <SubTitle subTitle={'Unleash Your Creative Potential with CraftyClassroom - Your Gateway to Artistic Excellence'} />
                    <p>Are you an art enthusiast seeking a platform to refine your craft or a complete beginner eager to dive into the world of creativity?
                        Look no further than CraftyClassroom, your one-stop destination for unlocking your artistic potential.
                    </p>
                    <Blog title={'Discover the World of Possibilities:'} description={`At CraftyClassroom,
                     we believe that everyone has an artist within them waiting to be nurtured. 
                    Our diverse range of online courses covers a myriad of art forms, from painting and sculpture to digital art and woodworking. 
                    Whether you're interested in traditional techniques or modern innovations, 
                    our comprehensive selection ensures there's something for every creative soul.`} />
                    <Blog title={'Expert Instructors at Your Fingertips:'} description={`At CraftyClassroom,
                     we believe that everyone has an artist within them waiting to be nurtured. 
                    Our diverse range of online courses covers a myriad of art forms, from painting and sculpture to digital art and woodworking. 
                    Whether you're interested in traditional techniques or modern innovations, 
                    our comprehensive selection ensures there's something for every creative soul.`} />
                    <Blog title={'Flexibility for Your Busy Lifestyle:'} description={`At CraftyClassroom,
                     we believe that everyone has an artist within them waiting to be nurtured. 
                    Our diverse range of online courses covers a myriad of art forms, from painting and sculpture to digital art and woodworking. 
                    Whether you're interested in traditional techniques or modern innovations, 
                    our comprehensive selection ensures there's something for every creative soul.`} />
                    <Blog title={'Join a Thriving Community:'} description={`At CraftyClassroom,
                     we believe that everyone has an artist within them waiting to be nurtured. 
                    Our diverse range of online courses covers a myriad of art forms, from painting and sculpture to digital art and woodworking. 
                    Whether you're interested in traditional techniques or modern innovations, 
                    our comprehensive selection ensures there's something for every creative soul.`} />
                    <p>Don't let your artistic dreams remain unexplored. With us, you'll gain the knowledge, confidence,
                        and community needed to create art that speaks to your soul.
                        Join us today and embark on a transformative journey of self-expression and creativity.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blogs