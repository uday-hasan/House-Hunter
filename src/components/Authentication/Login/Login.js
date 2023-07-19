import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import SnackbarModal from '../../shared/Snackbar';
import { AuthContext } from '../../Context/UserContext';
import { SnackContext } from '../../Context/SnackBarContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { open, setOpen, handleClose, severity, setSeverity, message, setMessage } = useContext(SnackContext)
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        fetch(`http://localhost:4600/authentication/signin`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(res => {
            return res.json()
        }).then(result => {
            if (result.success) {
                localStorage.setItem('user', JSON.stringify({ token: result.token, user: result.user, role: result.role, details: result.details }))
                setUser(result.user)
                setOpen(true)
                setSeverity('success')
                setMessage(result.message)
                navigate('/dashboard');
            }
            else {
                setOpen(true)
                setSeverity('error')
                setMessage(result.message)
            }
        })
    }
    return (
        <Stack
            spacing={2} border={'2px solid'} height={'100vh'} width={'50%'} margin={'0 auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}
        >
            <Typography variant='h3'>LOGIN</Typography>
            <Stack spacing={2} component='form' onSubmit={handleLogin}>
                <TextField placeholder='Email' name='email'></TextField>
                <TextField placeholder='Password' name='password'></TextField>
                <Button type='submit'>LOGIN</Button>
            </Stack>
            {
                open && <SnackbarModal open={open} message={message} severity={severity} handleClose={handleClose} />
            }
        </Stack>
    )
}

export default Login