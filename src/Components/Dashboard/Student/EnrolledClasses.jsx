import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider';
import SectionTitle from '../../SectionTitle/SectionTitle';

function EnrolledClasses() {
    const { user, loading } = useContext(AuthContext);
    const [enrolled, setEnrolled] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-school-server-side-phi.vercel.app/enrolledClasses',{
            method:'GET',
            headers:{
              authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
          })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEnrolled(data)
            })
    }, [])
    
    if (loading) {
        return <div>.........</div>
    }

    const enrolledData = enrolled.filter(x => x.studentEmail === user.email)


    return (
        <div>
            <SectionTitle title={'my Enrolled classes'}></SectionTitle>
            <div className='grid md:grid-cols-4 gap-5 mx-auto my-10'>
            {
                enrolledData?enrolledData.map(x =>
                    <div key={x._id} className="card h-60  bg-base-100 shadow-xl image-full">
                        <figure><img src={x.classImage} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{x.className}</h2>
                            <p>Instructor Name: {x.instructorName}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-green-700 border-0 text-white">Play</button>
                            </div>
                        </div>
                    </div>):<p>Please Select a class and complete payment to enroll in a</p>
            }
        </div>
        </div>
    )
}

export default EnrolledClasses;