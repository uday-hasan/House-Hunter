import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //For Snackbar Modal
    const [openModal, setOpenModal] = React.useState(false);
    const handleCloseModal = () => setOpenModal(false)

    //Set user from localstorage;
    const member = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        setLoading(true);
        setUser(member.user || null);
        setLoading(false)
    }, [member.user])

    const value = { user, setUser, loading, setLoading, open: openModal, setOpen: setOpenModal, handleClose: handleCloseModal };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext