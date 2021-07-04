import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metodo de pago
      </Typography>
      <Grid container spacing={3}>
        
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Número de tarjeta"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Caducidad" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="Código CVV"
            helperText="Los tres últimos dígitos de la tira de firmas"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}