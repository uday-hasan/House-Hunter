import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleHouse = ({ house, role }) => {
    console.log(role)
    const navigate = useNavigate();
    const { name, address, city, bedrooms, bathrooms, room_size, lastdate, rent, mobile, desc, _id } = house
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
            {
                role === 'house-renter' && <Button onClick={() => navigate(`/purch/${_id}`)}>Explore</Button>
            }
        </Box>
    )
}

export default SingleHouse