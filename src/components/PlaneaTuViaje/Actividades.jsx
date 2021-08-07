import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import '../scss/planea.scss'

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CustomizedSelects() {
    const classes = useStyles();
    const [setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <div>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-textbox">Actividad</InputLabel>
                    <BootstrapInput id="demo-customized-textbox" />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">¿Cuándo?</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="">
                            <em>Cancelar</em>
                        </MenuItem>
                        <MenuItem value={10}>Mañana</MenuItem>
                        <MenuItem value={20}>Tarde</MenuItem>
                        <MenuItem value={30}>Noche</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-textbox">Actividad</InputLabel>
                    <BootstrapInput id="demo-customized-textbox" />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">¿Cuándo?</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="">
                            <em>Cancelar</em>
                        </MenuItem>
                        <MenuItem value={10}>Mañana</MenuItem>
                        <MenuItem value={20}>Tarde</MenuItem>
                        <MenuItem value={30}>Noche</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-textbox">Actividad</InputLabel>
                    <BootstrapInput id="demo-customized-textbox" />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">¿Cuándo?</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="">
                            <em>Cancelar</em>
                        </MenuItem>
                        <MenuItem value={10}>Mañana</MenuItem>
                        <MenuItem value={20}>Tarde</MenuItem>
                        <MenuItem value={30}>Noche</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>

    );
}