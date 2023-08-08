import React, { useEffect, useState } from 'react'
import SectionTitle from '../../SectionTitle/SectionTitle';
import { LuTimerReset } from 'react-icons/lu';


function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [buttonDisable, setButtonDisable] = useState(null);


  useEffect(() => {
    fetch('https://summer-camp-school-server-side-phi.vercel.app/manageUsers',{
      method:'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])
    

    const handleMakeInstructor=(id)=>{

        fetch(`https://summer-camp-school-server-side-phi.vercel.app/updateRole/${id}`, {
          method: 'PATCH',
          headers:
            { 'content-type': 'application/json' },
          body: JSON.stringify({role:'instructor'})
        })
          .then(res => res.json())
          .then(data => {
            
            if (data.modifiedCount===1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully changed the role as Instructor',
                    showConfirmButton: false,
                    timer: 1500})
                    const updatedUsers = users.map((user) => {
                      if (user._id === id) {
                        return { ...user, role: 'instructor' };
                      }
                      return user;
                    });
                    setUsers(updatedUsers);
                  

            }
    
          })
          setButtonDisable(id)
    }
    const handleMakeAdmin=(id)=>{

      fetch(`https://summer-camp-school-server-side-phi.vercel.app/updateRole/${id}`, {
        method: 'PATCH',
        headers:
          { 'content-type': 'application/json' },
        body: JSON.stringify({role:'admin'})
      })
        .then(res => res.json())
        .then(data => {
          
          if (data.modifiedCount===1) {
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Successfully changed the role as Admin',
                  showConfirmButton: false,
                  timer: 1500})
                  const updatedUsers = users.map((user) => {
                    if (user._id === id) {
                      return { ...user, role: 'admin' };
                    }
                    return user;
                  });
                  setUsers(updatedUsers);
                }
          
  
        })
        setButtonDisable(id)
  }
  const handleResetRole=(id)=>{

    fetch(`https://summer-camp-school-server-side-phi.vercel.app/updateRole/${id}`, {
      method: 'PATCH',
      headers:
        { 'content-type': 'application/json' },
      body: JSON.stringify({role:'student'})
    })
      .then(res => res.json())
      .then(data => {
        
        if (data.modifiedCount===1) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully reset the Role',
                showConfirmButton: false,
                timer: 1500})
                const updatedUsers = users.map((user) => {
                  if (user._id === id) {
                    return { ...user, role: 'student' };
                  }
                  return user;
                });
                setUsers(updatedUsers);
              }

      })
      setButtonDisable(id)
}
  

    return (
        <div>
            <SectionTitle title={'All Users'}></SectionTitle>
            <table className="lg:w-full md:mx-auto mx-5">
                <thead>
                    <tr className=" bg-gray-100 text-left">
                        <th className='py-2'>No.</th>
                        <th className='lg:block hidden'>Name</th>
                        <th>Email</th>
                        <th className='lg:block hidden' >Role</th>
                        <th>Change Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id} className="border-b">
                            <td className='py-2'>{index + 1}</td>
                            <td className='lg:block hidden'>{user.name}</td>
                            <td>{user.email}</td>
                            <td className={user.role=='admin'?'lg:block hidden font-bold':'lg:block hidden'|| user.role=='instructor'?'text-blue-500 lg:block hidden':'lg:block hidden'}>{user.role}</td>
                            <td className=''>
                                <button 
                                onClick={()=>handleMakeInstructor(user._id)} 
                                disabled={buttonDisable==user._id || (user?.role==='instructor')} 
                                className={buttonDisable==user._id||(user?.role==='instructor')?'shadow px-2 text-gray-200 rounded-full':'bg-green-300 hover:bg-gray-100 shadow px-2 rounded-full'}
                               >Instructor</button> &nbsp;&nbsp;&nbsp;
                                <button 
                                onClick={()=>handleMakeAdmin(user._id)} 
                                disabled={buttonDisable==user._id || (user?.role==='admin')} 
                                className={buttonDisable==user._id||(user?.role==='admin')?'shadow px-2 rounded-full text-gray-200':'bg-green-300 hover:bg-gray-100 shadow px-2 rounded-full'}
                               >Admin</button>&nbsp;&nbsp;&nbsp;
                               <button 
                                onClick={()=>handleResetRole(user._id)} 
                                disabled={buttonDisable==user._id || (user?.role==='student')} 
                                className={buttonDisable==user._id||(user?.role==='student')?'text-3xl text-gray-200': 'text-3xl text-red-700'}
                               ><LuTimerReset/></button>
                            </td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    )
}

export default ManageUsers;