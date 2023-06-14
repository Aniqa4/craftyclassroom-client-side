import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import AdminDashboard from './Admin/AdminDashboard';
import InstructorDashboard from './Instructor/InstructorDashboard';
import StudentDashboard from './Student/StudentDashboard';

function Dashboard() {
  const  {user, loading}=useContext(AuthContext)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-school-server-side-phi.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    if(loading){
      return
    }

    const currentUser=users.find(x=>user.email===x.email)
  
      
  return (
    <div className='container mx-auto md:my-24 '>
      {
        currentUser?.role==='admin' && <AdminDashboard></AdminDashboard>
      }
      {
        currentUser?.role==='instructor' && <InstructorDashboard></InstructorDashboard>
      }
      {
        (currentUser?.role==='student') && <StudentDashboard></StudentDashboard>
      }
    </div>
  )
}

export default Dashboard;