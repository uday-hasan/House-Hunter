import { Box, Typography } from '@mui/material'
import React from 'react'

const SingleHouse = ({ house }) => {
    const { name, address, city, bedrooms, bathrooms, room_size, lastdate, rent, mobile, desc } = house
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
        </Box>
    )
}

export default SingleHouse