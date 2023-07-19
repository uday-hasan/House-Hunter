import { AppBar, Box, Button, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/UserContext'

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const routes = [
        {
            title: 'Home', path: '/'
        },


    ]
    return (
        <AppBar position='sticky'>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Typography>House Hunter</Typography>
                <Box sx={{
                    display: { xs: 'none', md: 'flex' }, border: 'solid', justifyContent: 'flex-end'
                }}>
                    {
                        routes.map(route => <Typography sx={{ textDecoration: 'none', margin: '0 0.5em' }} variant={Link} component={Link} to={route.path} key={route.title} >{route.title}</Typography>)
                    }
                </Box>
                <Box>
                    {
                        user ? <Button variant='contained' onClick={() => navigate('/dashboard')}>DASHBOARD</Button> : <Button>SIGNIN</Button>
                    }
                </Box>
            </Box>
            <Stack></Stack>
        </AppBar>
    )
}

export default Navbar