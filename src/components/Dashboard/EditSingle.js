import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import SnackbarModal from '../shared/Snackbar';
import { SnackContext } from '../Context/SnackBarContext';
import { AuthContext } from '../Context/UserContext';

const EditSingle = () => {
    const { open, setOpen, handleClose, severity, setSeverity, message, setMessage } = useContext(SnackContext)
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const handleEdit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const address = e.target.address.value;
        const city = e.target.city.value;
        const bedrooms = e.target.bedrooms.value;
        const bathrooms = e.target.bathrooms.value;
        const room_size = e.target.room_size.value;
        const lastdate = e.target.lastdate.value;
        const rent = e.target.rent.value;
        const mobile = e.target.mobile.value;
        const desc = e.target.description.value;
        const data = { name, address, city, bedrooms, bathrooms, room_size, lastdate, rent, mobile, desc, user }
        fetch(`http://localhost:4600/owner/edit/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            if (result.success) {
                setOpen(true)
                setSeverity('success')
                setMessage(result.message)
            }
            else {
                setOpen(true)
                setSeverity('error')
                setMessage(result.message)
            }
        })
        // }, [id, navigate])
    }
    return (
        <Box border={'solid'}>
            <Typography variant={'h4'} textAlign={'center'} margin={'1em 0'} >Add new house</Typography>
            <Stack spacing={2} justifyContent={'center'} alignItems={'center'} component={'form'} onSubmit={handleEdit} >
                <TextField name='name' placeholder='Name'></TextField>
                <TextField name='address' placeholder='Address'></TextField>
                <TextField name='city' placeholder='City'></TextField>
                <TextField name='bedrooms' placeholder='Bedrooms'></TextField>
                <TextField name='bathrooms' placeholder='Bathrooms'></TextField>
                <TextField name='room_size' placeholder='Room Size(in feetXfeet)'></TextField>
                <TextField name='lastdate' placeholder='Availability Date' type='date' ></TextField>
                <TextField name='rent' placeholder='Rent(per month)'></TextField>
                <TextField name='mobile' placeholder='Mobile'></TextField>
                <TextField multiline maxRows={20} name='description' placeholder='Description'></TextField>
                <Button type='submit'>ADD</Button>
            </Stack>
            {
                open && <SnackbarModal open={open} severity={severity} handleClose={handleClose} message={message} />
            }
        </Box>
    )
}

export default EditSingle