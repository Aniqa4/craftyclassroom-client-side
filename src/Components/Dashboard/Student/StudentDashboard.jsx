
import React, { useContext } from 'react'
import SelectedClasses from './SelectedClasses';
import EnrolledClasses from './EnrolledClasses';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
//import useStudentData from '../../Query/useStudentData';

function StudentDashboard() {
    const { user } = useContext(AuthContext)

    return (
        <div className='container mx-auto my-24 '>
            <div>
                <SectionTitle title={'Student information'}></SectionTitle>
                <div className='px-5'>
                    <img src={user.photoURL} className='w-2/12' />
                    <h1 className='mt-5 md:text-3xl font-semibold'>Name : {user.displayName}</h1>
                    <p>Email : {user.email}</p>
                    <Link to="/payment-history"><button className='btn my-5'>Payment History</button></Link>
                </div>

            </div>

            <SelectedClasses></SelectedClasses>
            <EnrolledClasses></EnrolledClasses>

        </div>
    )
}

export default StudentDashboard;