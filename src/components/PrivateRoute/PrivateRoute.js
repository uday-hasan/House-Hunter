import React, { useContext } from 'react'
import { AuthContext } from '../Context/UserContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // if(loadin)
    if (!user) return <Navigate to={'/login/signup'} />
    else return children

}

export default PrivateRoute