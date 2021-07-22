import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardReturnHotel from './destinos/CardReturnHotel'
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function ResultadoDestinos(props) {
  let infoAtracciones = props.data.Atracciones.Hoteles;

  // infoAtracciones.map(Element=>console.log(Element))

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography>
        {infoAtracciones.map((Element) => {
          console.log(Element)
          return (
            <div>
              <CardReturnHotel to={Element.to} nombre={Element.nombre} src={Element.img} precio={Element.precio} descripcion={Element.descripcion} />
            </div>
          )
        })}
      </Typography>
    </div>
  );
}

export default ResultadoDestinos;

