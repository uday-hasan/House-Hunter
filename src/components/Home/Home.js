import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/UserContext'
import useFetch from '../hooks/useFetch'
import SingleHouse from '../Dashboard/SingleHouse'

const Home = () => {
    const { user, role } = useContext(AuthContext)
    const [houses, setHouses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4600/owner/allhouses`).then(res => res.json()).then(result => setHouses(result.result))

    }, [])
    return (
        <Box>
            <Box>
                {
                    houses.map(house => <SingleHouse role={role} house={house} key={house._id} />)
                }
            </Box>
        </Box>
    )
}

export default Home