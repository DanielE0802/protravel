import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BotonComentar from './BotonComentar';
import Puntuar from './Puntuar';

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
            <div onClick={handleClickOpen}>
                <BotonComentar />
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Comenta</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¡Cuentale a los demas usuarios tu experiencia en este lugar!
                    </DialogContentText>
                    <Puntuar></Puntuar>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Comentar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}