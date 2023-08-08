import React, { useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ManageUsers from './ManageUsers';
import ManageClasses from './ManageClasses';

function AdminDashboard() {

  return (
    <div className='my-20'>
      <Tabs>
        <div className='lg:flex'>
          <div className=' lg:w-1/6 max-auto'>
            <TabList>
              <Tab ><button className='btn  mb-5'>Manage Classes</button></Tab>
              <Tab><button className='btn'>Manage Users</button></Tab>
            </TabList>
          </div>
          <div className=' border-cyan-700 lg:ps-20 lg:border-l-[2px] lg:w-5/6 '>
            <TabPanel>
              <ManageClasses></ManageClasses>
            </TabPanel>
            <TabPanel>
              <ManageUsers></ManageUsers>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

export default AdminDashboard;