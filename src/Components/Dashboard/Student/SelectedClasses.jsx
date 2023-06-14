import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import Swal from 'sweetalert2';
import SectionTitle from '../../SectionTitle/SectionTitle';

function SelectedClasses() {
    const { user, loading } = useContext(AuthContext);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-school-server-side-phi.vercel.app/selectedClasses', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSelected(data)
            })
    }, [])

    const handleDeleteClass = (id) => {
        console.log(id);
        fetch(`https://summer-camp-school-server-side-phi.vercel.app/selectedClasses/${id}`,
            {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class has been deleted',
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

    return (
        <div>
            <SectionTitle title={'my selected classes'}></SectionTitle>
            <div className='grid md:grid-cols-4 gap-5 mx-auto my-10'>
            {
                singleStudentData.map((x, index) =>
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
        </div>
    )
}

export default SelectedClasses;