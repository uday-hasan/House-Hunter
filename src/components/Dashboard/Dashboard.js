import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/UserContext'

const Dashboard = () => {
    const { role } = useContext(AuthContext);
    return (
        <Box display={'flex'} border={'solid'}>
            <Box flex={3}>
                <Outlet></Outlet>
            </Box>
            {
                role === 'house-owner' ?
                    <Box flex={1} border={'solid'} height={'100vh'} position='sticky' >
                        <Typography component={Link} sx={{ textDecoration: 'none' }} to='/dashboard/all'  >All Houses</Typography>
                        <Typography component={Link} sx={{ textDecoration: 'none' }} to='/dashboard/edit'  >Edit Houses</Typography>
                        <Typography component={Link} sx={{ textDecoration: 'none' }} to='/dashboard/add'  >Add New House</Typography>
                    </Box> :
                    <Box>
                        <Typography component={Link} sx={{ textDecoration: 'none' }} to='/dashboard/booking'  >Manage Booking</Typography>
                        <Typography component={Link} sx={{ textDecoration: 'none' }} to='/dashboard/booking'  >All Houses</Typography>
                        <Typography component={Link} sx={{ textDecoration: 'none' }} to='/dashboard/booking'  >All Houses</Typography>
                    </Box>
            }
        </Box>
    )
}

export default Dashboard