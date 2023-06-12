
import React, { useContext, useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { TiDelete } from 'react-icons/ti';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
//import useStudentData from '../../Query/useStudentData';

function StudentDashboard() {
    const { user, loading } = useContext(AuthContext);
    const [selected, setSelected] = useState([]);
    const [enrolled, setEnrolled] = useState([]);



    //const [studentData, refetch]=useStudentData()

    useEffect(() => {
        fetch('http://localhost:5000/selectedClasses')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSelected(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/enrolledClasses')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEnrolled(data)
            })
    }, [])

    const handleDeleteClass = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/selectedClasses/${id}`,
            {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Toy has been deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const remainingUsers = selected.filter(x => x._id !== id);
                    setSelected(remainingUsers);

                }
            })
    }

    if (loading) {
        return <div>.........</div>
    }
    const singleStudentData = selected.filter(x => x.studentEmail === user.email)
    const enrolledData = enrolled.filter(x => x.studentEmail === user.email)
    console.log('data', singleStudentData);
    return (
        <div className='container mx-auto my-24 '>
            <SectionTitle title={'my selected classes'}></SectionTitle>
            <div className='grid md:grid-cols-4 gap-5 mx-auto my-10'>
                {
                    singleStudentData.map((x,index) =>
                        <div key={index} className="card h-60  bg-base-100 shadow-xl image-full">
                            <figure><img src={x.classImage} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{x.className}</h2>
                                <p>Instructor Name: {x.instructorName}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/payment/${x._id}`}>
                                        <button className="btn">Pay</button>
                                    </Link>
                                    <button onClick={() => handleDeleteClass(x._id)} className=" text-5xl text-red-700"><TiDelete /></button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <SectionTitle title={'my Enrolled classes'}></SectionTitle>
            <div className='grid md:grid-cols-4 gap-5 mx-auto my-10'>
                {
                    enrolledData.map(x =>
                        <div key={x._id} className="card h-60  bg-base-100 shadow-xl image-full">
                            <figure><img src={x.classImage} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{x.className}</h2>
                                <p>Instructor Name: {x.instructorName}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-green-700 border-0 text-white">Play</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default StudentDashboard;