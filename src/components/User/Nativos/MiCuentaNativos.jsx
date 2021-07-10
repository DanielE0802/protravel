import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import { roundTextFieldStylesHook } from '@mui-treasury/styles/textField/round';
import Select from '../selectUser'
import Botones from '../botonesSelect';
import '../../scss/user.scss';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[700],
        },
        secondary: {
            main: purple[700],
        },
    },
});

const TextFields = () => {
    const inputBaseStyles = roundTextFieldStylesHook.useInputBase();
    const inputLabelStyles = roundTextFieldStylesHook.useInputLabel();
    const helperTextStyles = roundTextFieldStylesHook.useHelperText();
    return (
        <div >

            <h1>Mi Cuenta</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <div className="datos">
                <TextField
                    label={'Nombre'}
                    placeholder={'Placeholder'}
                    margin={'normal'}
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true, readOnly: true }}
                    FormHelperTextProps={{ classes: helperTextStyles }}
                    defaultValue="Oscar Eduardo Restrepo Mejia"
                    style={{marginLeft: 50, marginRight: 50 }}

                />
                <TextField
                    label={'Nombre de Usuario'}
                    placeholder={'Placeholder'}
                    margin={'normal'}
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true, readOnly: true }}
                    FormHelperTextProps={{ classes: helperTextStyles }}
                    defaultValue="OscarRestrepo26"
                    style={{marginLeft: 50, marginRight: 50 }}

                />
                <TextField
                    label={'Correo'}
                    placeholder={'Placeholder'}
                    margin={'normal'}
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true, readOnly: true }}
                    defaultValue="oscarrestrepo2002@gmail.com"
                    style={{marginLeft: 50, marginRight: 50 }}
                />
                <TextField
                    label={'Número telefonico'}
                    placeholder={'Placeholder'}
                    margin={'normal'}
                    InputLabelProps={{ shrink: true, classes: inputLabelStyles }}
                    InputProps={{ classes: inputBaseStyles, disableUnderline: true, readOnly: true }}
                    defaultValue="+57 3165034633"
                    style={{marginLeft: 50, marginRight: 50 }}

                />
            </div>
            
            <div style={{display: 'block', width: 250, margin: 'auto', marginTop: 20, marginBottom: 20}}>
            <Select></Select>
            </div>

            <Botones></Botones>

        </div>
    );
};

const RoundTextFieldStyle = () => (
    <ThemeProvider theme={theme}>
        <TextFields />
    </ThemeProvider>
);

export default RoundTextFieldStyle;