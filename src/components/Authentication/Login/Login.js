import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
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
        }).then(res => res.json()).then(result => {
            console.log(result)
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
        </Stack>
    )
}

export default Login