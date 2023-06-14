import React, { useEffect, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ManageUsers from './ManageUsers';
import ManageClasses from './ManageClasses';

function AdminDashboard() {

  return (
    <div>
      <Tabs>
        <div className='flex'>
          <div className=' w-1/6'>
            <TabList>

              <Tab ><button className='btn  mb-5'>Manage Classes</button></Tab>
              <Tab><button className='btn'>Manage Users</button></Tab>
            </TabList>
          </div>
          <div className=' border-cyan-700 ps-20 border-l-[2px] w-5/6 '>
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