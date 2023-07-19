// import { Option, Select, selectClasses } from '@mui/joy'
import { Button, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
const Login = () => {
    const [role, setRole] = useState('House Owner');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const mobile = e.target.mobile.value;
        const password = e.target.password.value;
        fetch(`http://localhost:4600/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, mobile, password, role })
        }).then(res => res.json()).then(result => console.log(result))
    }
    return (
        <Stack spacing={2} border={'2px solid'} height={'100vh'} width={'50%'} margin={'0 auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant='h3'>Register</Typography>
            <Stack spacing={2} component={'form'} onSubmit={handleSubmit}>
                <TextField placeholder='FULL NAME' name='name'></TextField>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    displayEmpty
                    value={role}
                    input={<OutlinedInput placeholder='Select Role' />}
                    onChange={e => setRole(e.target.value)}

                >
                    <MenuItem value="house-owner" >House Owner</MenuItem>
                    <MenuItem value="house-renter">House Renter</MenuItem>
                </Select>
                <TextField placeholder='Email' name='email'></TextField>
                <TextField placeholder='Mobile' name='mobile'></TextField>
                <TextField placeholder='Password' name='password'></TextField>
                <Button type='submit'>REGISTER</Button>
            </Stack>
        </Stack>
    )
}

export default Login