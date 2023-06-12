import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SubTitle from '../SectionTitle/SubTitle';


function PopularInstructors() {
    const url = 'https://summer-camp-school-server-side-phi.vercel.app/sixInstructors';
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div>
            <SectionTitle title={'Popular Instructors'}></SectionTitle>
            <SubTitle subTitle={'Discover Our Most Popular Instructors: Experts You Can Trust'}></SubTitle>
            <div className='grid md:grid-cols-6 grid-cols-2 md:gap-10 md:my-20 gap-3 m-3'>
                {
                    instructors.map(instructor =>
                        <div key={instructor._id} className="card glass">
                            <figure><img src={instructor.photoURL} className=' h-full ' /></figure>
                            <div className="md:card-body py-5 px-2">
                                <h2 className="md:card-title">{instructor.name}</h2>
                                <p>{instructor.email}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default PopularInstructors;