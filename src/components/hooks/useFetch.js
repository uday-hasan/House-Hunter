import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const useFetch = () => {
    const { user } = useContext(AuthContext)
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4600/owner/all/?email=${user}`).then(res => res.json()).then(result => setHouses(result.result))
    }, [user])
    return { houses, setHouses }
}

export default useFetch;