import { Alert, Snackbar } from '@mui/material'
import React from 'react'


const SnackbarModal = ({ open, handleClose, severity, message }) => {
    const [vertical, horizontal] = ['top', 'right'];
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarModal