import React from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Img1 from "../img/Img1.jpg";
import theme from "./theme/themeconfig";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardPlanes() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Card
        className={classes.root}
        style={{
          minWidth: "300px",
          margin: "10px 5px 10px 5px",
          padding: "5px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={Img1}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Valle Del Cocora
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              El valle de Cocora es un paisaje natural localizado en la
              cordillera central de los Andes colombianos, específicamente en el
              departamento del Quindío, en el área de influencia del Parque
              nacional natural Los Nevados.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            COP 150.000
          </Button>
          <Button size="small" color="primary">
            Más información
          </Button>
        </CardActions>
      </Card>
    </MuiThemeProvider>
  );
}
