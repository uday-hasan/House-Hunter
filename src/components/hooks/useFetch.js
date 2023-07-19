import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const useFetch = (url) => {
    const { user } = useContext(AuthContext)
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        fetch(`url`).then(res => res.json()).then(result => { console.log(result); setHouses(result.result) })
    }, [user])
    return { houses, setHouses }
}

export default useFetch;