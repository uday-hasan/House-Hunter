import React, { createContext } from 'react'

export const SnackContext = createContext();
const SnackBarContext = ({ children }) => {

    //For Snackbar Modal
    const [openModal, setOpenModal] = React.useState(false);
    const [severity, setSeverity] = React.useState('success');
    const [message, setMessage] = React.useState('');
    const handleCloseModal = () => setOpenModal(false)
    const value = { open: openModal, setOpen: setOpenModal, handleClose: handleCloseModal, severity, setSeverity, message, setMessage };
    return (
        <SnackContext.Provider value={value}>{children}</SnackContext.Provider>
    )
}

export default SnackBarContext