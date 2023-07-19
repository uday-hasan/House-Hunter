import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    // const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)


    //Set user from localstorage;
    const member = JSON.parse(localStorage.getItem('user'))
    const { name, mobile, role } = member?.user;
    console.log(member, name)
    useEffect(() => {
        setLoading(true);
        setUser(member?.user?.user || null);
        // setRole(member?.role?.role || null);
        setLoading(false)
    }, [member?.user?.user, member?.role?.role])
    console.log(role)
    const value = { user, setUser, loading, setLoading, role, name, mobile };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext