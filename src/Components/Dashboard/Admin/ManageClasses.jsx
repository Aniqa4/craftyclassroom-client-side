import React, { useEffect, useState } from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
//import { useQuery } from '@tanstack/react-query'

function ManageClasses() { 
    const [classes, setClasses] = useState([]);
    const [buttonDisable, setButtonDisable] = useState(null);

   /*  const { isLoading, data } = useQuery({
      queryKey: ['classes'],
      queryFn: fetchTodoList,
    }) */

    useEffect(() => {
        fetch('https://summer-camp-school-server-side-phi.vercel.app/allclasses',{
          method:'GET',
          headers:{
            authorization: `Bearer ${localStorage.getItem('access-token')}`
          }
        })
          .then(res => res.json())
          .then(data => {
            setClasses(data)
          })
      }, [])

      const handleApprove=(id)=>{

        fetch(`https://summer-camp-school-server-side-phi.vercel.app/updateClassStatus/${id}`, {
          method: 'PATCH',
          headers:
            { 'content-type': 'application/json' },
          body: JSON.stringify({status:'approved'})
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount===1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Class has been approved',
                    showConfirmButton: false,
                    timer: 1500})
            }
    
          })
          setButtonDisable(id)
          //console.log('id',id);
    }
    //console.log(classes);
    const handleDeny=(id)=>{

        fetch(`https://summer-camp-school-server-side-phi.vercel.app/updateClassStatus/${id}`, {
          method: 'PATCH',
          headers:
            { 'content-type': 'application/json' },
          body: JSON.stringify({status:'denied'})
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.modifiedCount===1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Class has been approved',
                    showConfirmButton: false,
                    timer: 1500})
            }
    
          })
          setButtonDisable(id)
          //console.log('id',id);
    }

    return (
        <div >
            <SectionTitle title={'All Classes'}></SectionTitle>
            <div className='grid grid-cols-3 gap-10'>
                {
                    classes.map(singleClass =>
                        <div key={singleClass._id} className='p-10 border rounded shadow-xl'>
                            <img src={singleClass.classImage} className='w-96 h-56 rounded-xl mb-2' />
                            <h1>Class Name: {singleClass.className}</h1>
                            <p>Instructor Name : {singleClass.name}</p>
                            <p>Instructor email : {singleClass.email}</p>
                            <p>Available Seats : {singleClass.availableSeats}</p>
                            <p>price : {singleClass.price}</p>
                            <p className='mb-5'>status : {singleClass.status}</p>
                            <button onClick={()=>handleApprove(singleClass._id)} 
                            disabled={buttonDisable==singleClass._id||singleClass.status==='approved'||singleClass.status==='denied'}
                            className={buttonDisable==singleClass._id|| singleClass.status==='approved'||singleClass.status==='denied'?'btn': 'btn bg-cyan-200 text-cyan-950 mt-2'}>Approve</button>
                            &nbsp;
                            <button onClick={()=>handleDeny(singleClass._id)} 
                            disabled={buttonDisable==singleClass._id||singleClass.status==='denied'||singleClass.status==='approved'}
                            className={buttonDisable==singleClass._id|| singleClass.status==='denied'||singleClass.status==='approved'?'btn': 'btn bg-cyan-200 text-cyan-950 mt-2'}>Deny</button> &nbsp;
                            <Link to={`/feedback/${singleClass._id}`}>
                              <button className='btn bg-cyan-200 text-cyan-950'>Feedback</button></Link>
                        </div>)
                }
            </div>
        </div>
    )
}

export default ManageClasses;