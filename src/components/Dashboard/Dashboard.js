import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <Box display={'flex'} border={'solid'}>
            <Box flex={3}>
                <Outlet></Outlet>
            </Box>
            <Box flex={1} border={'solid'} height={'100vh'} position='sticky' >
                <Typography component={Link} sx={{ textDecoration: 'none' }} to='/dashboard/all'  >All Houses</Typography>
                <Typography component={Link} sx={{ textDecoration: 'none' }} to='/dashboard/edit'  >Edit Houses</Typography>
                <Typography component={Link} sx={{ textDecoration: 'none' }} to='/dashboard/add'  >Add New House</Typography>
            </Box>
        </Box>
    )
}

export default Dashboard