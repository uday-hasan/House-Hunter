import { Box, Button, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BookingModal from './BookingModal';
import { AuthContext } from '../Context/UserContext';

const PurchItem = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()
    const { id } = useParams()
    const [house, setHouse] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4600/owner/${id}`).then(res => res.json()).then(result => setHouse(result.result))
    }, [id])

    const { name, address, city, bedrooms, bathrooms, room_size, lastdate, rent, mobile, desc, _id } = house
    const { name: Name, user } = useContext(AuthContext)
    return (
        <Box>
            <img alt='Not found' />
            <Typography>Name : {name}</Typography>
            <Typography>Address : {address}</Typography>
            <Typography>City : {city}</Typography>
            <Typography>Bedrooms : {bedrooms}</Typography>
            <Typography>Bathrooms : {bathrooms}</Typography>
            <Typography>Room Size(ft/ft) : {room_size}</Typography>
            <Typography>Availabillity : {lastdate}</Typography>
            <Typography>Rent : {rent}</Typography>
            <Typography>Contact : {mobile}</Typography>
            <Typography>Description : {desc}</Typography>
            <Box>
                <Button onClick={handleOpen}>Book Now</Button>
                <Button onClick={() => navigate('/')}>Back to home</Button>
            </Box>
            {
                open && <BookingModal openModal={open} handleCloseModal={handleClose} name={Name} email={user} id={_id} />
            }
        </Box>
    )
}

export default PurchItem