import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SubTitle from '../SectionTitle/SubTitle';

function Instructor() {
  const [instructors, setInstructors] = useState([]);
  const [approvedClasses, setApprovedClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/approvedClasses')
      .then(res => res.json())
      .then(data => {
        setApprovedClasses(data)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/allinstructors')
      .then(res => res.json())
      .then(data => {
        setInstructors(data)
      })
  }, [])
  console.log(approvedClasses);


  return (
    <div className='md:container md:mx-auto mx-5 my-24'>
      <SectionTitle title={'All Instructors'}></SectionTitle>
      <SubTitle subTitle={'Meet Our Talented Instructors'}></SubTitle>
      <div className='grid md:grid-cols-2 md:gap-20 gap-5'>
        {
          instructors.map(instructor =>
            <div key={instructor._id} className="card card-side bg-base-100 shadow-xl">
              <figure><img src={instructor.photoURL} className='md:w-56' /></figure>
              <div className="card-body" >
                <h1 className=' font-semibold'>Name: {instructor.name}</h1>
                <p className=' text-gray-500'>Email: {instructor.email}</p>
                <p className=' text-gray-500'>Number of Classes Taken:&nbsp;
                  {approvedClasses.filter(y => y.email === instructor.email).length}
                </p>
                <p className=' text-gray-500'>Name of the Classes:&nbsp;
                  {
                    approvedClasses.filter(y => y.email === instructor.email).length > 1 ?
                    <>
                      {
                        approvedClasses.filter(y => y.email === instructor.email).map(x =>
                          <>
                            <span key={instructor._id}>{x.className},&nbsp;</span>
                          </>)
                      }
                    </> : <span> {approvedClasses.filter(y => y.email === instructor.email).className}</span>
                }
                  
                </p>
              </div>
            </div>)
        }
      </div>
    </div >
  )
}

export default Instructor;