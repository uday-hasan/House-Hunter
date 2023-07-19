import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import useFetch from '../hooks/useFetch'

const EditHouse = () => {
    const { houses, setHouses } = useFetch()
    const handleDelete = (id) => {
        fetch(`http://localhost:4600/owner/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(result => {
            const rest = houses.filter(house => house._id !== id)
            setHouses(rest)
        })
    }

    const TD = styled('td')({
        border: '1px solid',
        textAlign: 'left',
    })
    const TH = styled('th')({
        border: '1px solid',
        textAlign: 'left',
    })
    return (
        <Box>

            {
                houses.length > 0 ?
                    <Box component='table' border={'1px solid'} width={'100%'} sx={{ borderCollapse: 'collapse' }}>
                        <tr>
                            <TH>Name</TH>
                            <TH>Address</TH>
                            <TH>City</TH>
                            <TH>Edit</TH>
                            <TH>Delete</TH>
                        </tr>
                        {/* <tr> */}
                        {
                            houses.map(house => <Typography component={'tr'} border={'solid 1px'} >
                                <TD>{house.name}</TD>
                                <TD>{house.address}</TD>
                                <TD>{house.city}</TD>
                                <TD><Button>Edit</Button></TD>
                                <TD><Button onClick={() => handleDelete(house._id)}>Delete</Button></TD>
                            </Typography>)
                        }
                        {/* </tr> */}

                    </Box> :
                    <Typography variant='h3'>No house left</Typography>
            }
        </Box>
    )
}

export default EditHouse