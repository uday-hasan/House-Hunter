import { Button, Modal, Stack, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { SnackContext } from '../Context/SnackBarContext';
import SnackbarModal from '../shared/Snackbar';

const BookingModal = ({ openModal, handleCloseModal, name, email, id }) => {
    const { open, setOpen, handleClose, severity, setSeverity, message, setMessage } = useContext(SnackContext)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mobile = e.target.mobile.value;
        const details = { name, email, mobile, bookedId: id }
        fetch(`http://localhost:4600/booking/`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(details)
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    setOpen(true)
                    setSeverity('success')
                    setMessage(result.message)
                }
                else {
                    setOpen(true)
                    setSeverity('error')
                    setMessage(result.message)
                }
            })
        console.log(details);
    }
    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack spacing={2} sx={style} component={'form'} onSubmit={handleSubmit} >
                <TextField value={name} aria-readonly />
                <TextField value={email} aria-readonly />
                <TextField placeholder='Mobile' name='mobile' />
                <Button type='submit'>Submit</Button>
                {
                    open && <SnackbarModal open={open} severity={severity} handleClose={handleClose} message={message} />
                }
            </Stack>
        </Modal>
    )
}

export default BookingModal