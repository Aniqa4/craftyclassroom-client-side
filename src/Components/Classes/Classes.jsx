import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import SubTitle from '../SectionTitle/SubTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';



function Classes() {
  const { user, loading } = useContext(AuthContext);
  const [approvedClasses, setApprovedClasses] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://summer-camp-school-server-side-phi.vercel.app/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })

  }, [])
  useEffect(() => {
    fetch('https://summer-camp-school-server-side-phi.vercel.app/approvedClasses')
      .then(res => res.json())
      .then(data => {
        setApprovedClasses(data)
      })

  }, [])

  useEffect(() => {
    fetch('https://summer-camp-school-server-side-phi.vercel.app/studentsData')
      .then(res => res.json())
      .then(data => {
        setStudentsData(data)
      })
  }, [])

  if (loading) {
    return <div><span className="loading loading-spinner loading-lg"></span></div>
  }



  const handleSelectClass = (classImage, className, price, instructorName, classId) => {

    if (user) {
      const studentName = user.displayName;
      const studentEmail = user.email;
      const paymentStatus='pending';
      const studentData = { studentName, studentEmail, classImage, className, price, instructorName, classId,paymentStatus }
      console.log(studentData);

      const existingData = studentsData.find(x => x.classId === classId);

      if (!existingData) {
        fetch('https://summer-camp-school-server-side-phi.vercel.app/studentsData', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(studentData)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Class has been added!',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else {
        Swal.fire({

          title: 'You have already added this class!',
          text: 'Try to select another class',

        })
      }
    }
    else{
      Swal.fire({

        icon: 'info',
        text: 'Please log in to Select class',
  
      })
    }


  }

  if (loading) {
    return <div>..........</div>

  }


  console.log(studentsData);

  return (
    <div className=' md:container md:mx-auto mx-5 my-24'>
      <SectionTitle title={'ALL CLASSES'}></SectionTitle>
      <SubTitle subTitle={'Select Your Desired Class'}></SubTitle>
      <div className='grid md:grid-cols-3 md:gap-20 gap-5'>
        {
          approvedClasses.map(x =>
            <div key={x._id} className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={x.classImage} className="rounded-xl md:h-56" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{x.className}</h2>
                <p>-By <span className=' font-semibold'>{x.name}</span></p>
                <p>Available Seats : {x.availableSeats}</p>
                <p>Price : {x.price}$</p>
                <div className="card-actions">
                  <button onClick={() => handleSelectClass(x.classImage, x.className, x.price, x.name, x._id)}
                    className="btn bg-gray-200 text-cyan-950" 
                    disabled={((users.find(x=>x.email===user.email)?.role)==='admin')||((users.find(x=>x.email===user.email)?.role)==='instructor')}>Select</button>
                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default Classes;