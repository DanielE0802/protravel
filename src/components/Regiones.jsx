import React from 'react';
import './scss/Destinos.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import region_amazonia from '../img/region_amazonia.webp';
import region_pacifica from '../img/region_pacifica.webp';
import region_andina from '../img/region_andina.webp';
import region_caribe from '../img/region_caribe.webp';
import region_insular from '../img/region_insular.webp';
import region_orinoquia from '../img/region_orinoquia.webp';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Regiones() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List className="ancho_region" component="nav" aria-label="main mailbox folders">
                <a href="/">
                    <ListItem button>
                        <ListItemIcon>
                            <img className="imagen_region" src={region_amazonia} alt="" />
                        </ListItemIcon>
                        <ListItemText className="texto_region" primary="Región Amazonía" />
                    </ListItem>
                </a>
                <a href="/">
                    <ListItem button>
                        <ListItemIcon>
                            <img className="imagen_region" src={region_pacifica} alt="" />
                        </ListItemIcon>
                        <ListItemText className="texto_region" primary="Región Pacifica" />
                    </ListItem>
                </a>
                <a href="/">
                    <ListItem button>
                        <ListItemIcon>
                            <img className="imagen_region" src={region_andina} alt="" />
                        </ListItemIcon>
                        <ListItemText className="texto_region" primary="Región Andina" />
                    </ListItem>
                </a>
                <a href="/">
                    <ListItem button>
                        <ListItemIcon>
                            <img className="imagen_region" src={region_caribe} alt="" />
                        </ListItemIcon>
                        <ListItemText className="texto_region" primary="Región Caribe" />
                    </ListItem>
                </a>
                <a href="/">
                    <ListItem button>
                        <ListItemIcon>
                            <img className="imagen_region" src={region_insular} alt="" />
                        </ListItemIcon>
                        <ListItemText className="texto_region" primary="Región Insular" />
                    </ListItem>
                </a>
                <a href="/">
                    <ListItem button>
                        <ListItemIcon>
                            <img className="imagen_region" src={region_orinoquia} alt="" />
                        </ListItemIcon>
                        <ListItemText className="texto_region" primary="Región Orinoquía" />
                    </ListItem>
                </a>
            </List>
            <Divider />
        </div>
    );
}