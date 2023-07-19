import React, { useContext } from 'react'
import { AuthContext } from '../Context/UserContext';
import { Box } from '@mui/material';
import SingleHouse from './SingleHouse';

const AllHouses = () => {
    const { user } = useContext(AuthContext)
    const [houses, setHouses] = React.useState([]);
    React.useEffect(() => {
        fetch(`http://localhost:4600/owner/all/?email=${user}`).then(res => res.json()).then(result => setHouses(result.result))
    }, [user])
    return (
        <Box>
            {
                houses.map(house => <SingleHouse house={house} key={house._id} />)
            }
        </Box>
    )
}

export default AllHouses