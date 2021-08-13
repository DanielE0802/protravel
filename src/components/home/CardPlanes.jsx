import React from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import theme from "../theme/themeconfig";

const useStyles = makeStyles({
  root: {
    maxWidth: '33.3%',
  },
});

const CardPlanes = props =>{
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
    
      <Card
        className={classes.root}
        style={{
          minWidth: "33.3%",
          
          margin: "10px 5px 10px 5px",
          padding: "5px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={props.url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.destiny}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.destinyDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            COP {props.destinyPrice}
          </Button>
          <Button size="small" color="primary">
            Más información
          </Button>
        </CardActions>
      </Card>
    </MuiThemeProvider>
  );
}

// export default function CardPlanes() {
 
// }

export default CardPlanes