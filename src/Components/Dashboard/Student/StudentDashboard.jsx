
import React from 'react'
import SelectedClasses from './SelectedClasses';
import EnrolledClasses from './EnrolledClasses';
//import useStudentData from '../../Query/useStudentData';

function StudentDashboard() {
    
    return (
        <div className='container mx-auto my-24 '>
            
            <SelectedClasses></SelectedClasses>
            <EnrolledClasses></EnrolledClasses>
            
        </div>
    )
}

export default StudentDashboard;