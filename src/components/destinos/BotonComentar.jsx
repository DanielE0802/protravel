import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CommentIcon from '@material-ui/icons/Comment';
import '../scss/BotonComentar.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={(classes.root, "boton")}>
            <Fab variant="extended" color="primary">
                Comentar
                <CommentIcon className={classes.extendedIcon} />
            </Fab>
        </div>
    );
}