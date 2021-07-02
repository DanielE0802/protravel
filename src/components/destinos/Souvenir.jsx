import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Souvenir from '../../img/souvenir.jpg';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={(classes.root, "TarjetaSouvenir")}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Souvenir}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Nombre Souvenir
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Descripcion del souvenir. Descripcion del souvenir. Descripcion del souvenir. Descripcion del souvenir. Descripcion del souvenir. Descripcion del souvenir.
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", justifyContent: "center"}}>
                        <NotListedLocationIcon style={{ color: green[500] }}></NotListedLocationIcon>Ubicacion
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}