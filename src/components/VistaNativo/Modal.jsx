import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Menu from '../VistaNativo/MenuNativos'
import '../scss/Nativos.scss'


export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />

            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Menu></Menu>
            </Dialog>
        </div>
    );
}