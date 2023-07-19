import React, { useContext } from 'react'
import { AuthContext } from '../Context/UserContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) return <h1> Loading</h1>
    if (!user) return <Navigate to={'/login/signup'} />
    else return children

}

export default PrivateRoute