import { Box, Drawer, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

function Menu() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { user } = useContext(AuthContext);

    return (
        <div>
            <button onClick={() => setIsDrawerOpen(true)} className=' text-xl'><LuMenu />
            </button>
            <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width={'200px'} role='presentation'>
                    <Typography component={'div'}>
                        <span onClick={() => setIsDrawerOpen(false)} className=' text-2xl'><MdOutlineClose /></span>
                        <ul className=' py-5'>
                            <li onClick={() => setIsDrawerOpen(false)} className=' border-b py-2'><Link to='/'>Home</Link></li>
                            <li onClick={() => setIsDrawerOpen(false)} className=' border-b py-2'><Link to='/instructors'>Instructors</Link></li>
                            <li onClick={() => setIsDrawerOpen(false)} className=' border-b py-2'><Link to='/classes'>Courses</Link></li>
                            {
                                user && <li onClick={() => setIsDrawerOpen(false)} className=' border-b py-2'><Link to='/dashboard'>Dashboard</Link></li>
                            }
                        </ul>
                    </Typography>
                </Box>
            </Drawer>
        </div>
    )
}

export default Menu