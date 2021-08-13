import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardReturn from './CardReturn'
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function AtraccionesComponent(props) {
  let infoAtracciones = props.data.Atracciones.Playas;



  // infoAtracciones.map(Element=>console.log(Element))

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Playas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {infoAtracciones.map((Element) => {
              console.log(Element)
              return( 
                <div>
                <CardReturn nombre={Element.nombre} src={Element.img} precio={Element.precio} Lanchas={Element.Lanchas} extra={Element.extra} />
                </div>              
                )
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}

export default AtraccionesComponent;
