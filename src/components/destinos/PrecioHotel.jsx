import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SelectDate from './SelectDate';

const useStyles = makeStyles({
    root: {
        maxWidth: 480,
        minWidth: 440,
    },
    media: {
        height: 20,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Hotel
                    </Typography>
                    <h2>$ Precio /noche</h2>

                </CardContent>
            </CardActionArea>

            <SelectDate />
            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="small" color="primary" >
                    Comprobar disponibilidad
        </Button>
            </CardActions>
        </Card>
    );
}