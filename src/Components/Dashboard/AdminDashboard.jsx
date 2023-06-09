import React, { useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import SectionTitle from '../SectionTitle/SectionTitle';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => {
        setClasses(data)
      })
  }, [])

  console.log(users);

  return (
    <div className='container mx-auto my-24'>
      <Tabs>
        <div className='flex'>
          <div className=' w-1/6'>
            <TabList>
              <Tab><button className='btn mb-5'>Manage Users</button></Tab>
              <Tab ><button className='btn'>Manage Classes</button></Tab>
            </TabList>
          </div>
          <div className=' border-cyan-700 ps-20 border-l-[2px] w-5/6 '>
            <TabPanel>
              <SectionTitle title={'All Users'}></SectionTitle>
              <table className=" w-full">
                <thead>
                  <tr className=" bg-gray-100 text-left">
                    <th className='py-2'>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>manage</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id} className="border-b">
                      <td className='py-2'>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button className='bg-green-300 hover:bg-gray-100 shadow px-2 rounded-full'>Make Instructor</button> &nbsp;&nbsp;&nbsp;
                        <button className='bg-green-300 hover:bg-gray-100 shadow px-2 rounded-full'>Make Admin</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabPanel>
            <TabPanel>
              <div>
                {
                  classes.map((singleClass,index)=>
                  <div key={index}>
                    {
                      singleClass.classes.map((x,index)=>
                      <div key={index}>
                        <p>{x.classId}</p>
                      </div>)
                    }
                  </div>
                )}
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

export default AdminDashboard;