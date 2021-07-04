import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InfoIcon from '@material-ui/icons/Info';
import HotelIcon from '@material-ui/icons/Hotel';
import ChatIcon from '@material-ui/icons/Chat';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './destiny.scss';
import Reseñas from './Reseñas';
import Comentar from './Comentar';
import data from '../../data/placeHolderDestinos.json'
import dataHoteles from '../../data/dataHoteles.json'
import { Grid } from '@material-ui/core';
import AtraccionesComponent from './AtraccionesComponent';
import Hotel from './Hoteles';
import ResultadoHoteles from '../ResultadoHoteles';
import Pagos from '../Payments/Checkout';
import '../scss/destinos.scss';
import Restaurantes from './Restaurantes';
import Souvenir from './Souvenir';
import Promos from './Promociones/Promos';



console.log(data.data)


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ marginTop: "50px" }}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Información general" icon={<InfoIcon />} {...a11yProps(0)} />
          <Tab label="Atracciones" icon={<BeachAccessIcon />} {...a11yProps(1)} />
          <Tab label="Hoteles" icon={<HotelIcon />} {...a11yProps(2)} />
          <Tab label="Restaurantes" icon={<RestaurantIcon />} {...a11yProps(3)} />
          <Tab label="souvenir" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="reseñas" icon={<ChatIcon />} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <img style={{ width: "50%", alignSelf: "center" }} src={data.data.img} alt=""></img>
          <p style={{ padding: "5px 40px 40px 40px" }}>{data.data.Información_General[0].descripcion}</p>
        </Grid>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <AtraccionesComponent data={data.data} ></AtraccionesComponent>
        <Promos></Promos>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Hotel />
        <ResultadoHoteles data={dataHoteles.data} ></ResultadoHoteles>

      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="Restaurantes" style={{ marginTop: -200}}>
          <Restaurantes></Restaurantes>
          <Restaurantes></Restaurantes>
          <Restaurantes></Restaurantes>
          <Restaurantes></Restaurantes>
          <Restaurantes></Restaurantes>
          <Restaurantes></Restaurantes>
          <Restaurantes></Restaurantes>
          <Restaurantes></Restaurantes>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="Souvenires">
      <Souvenir></Souvenir>
      <Souvenir></Souvenir>
      <Souvenir></Souvenir>
      <Souvenir></Souvenir>
      <Souvenir></Souvenir>
      <Souvenir></Souvenir>
      <Souvenir></Souvenir>
      <Souvenir></Souvenir>
      </div>

      </TabPanel>
      <TabPanel value={value} index={5}>
        <Comentar />
        <Reseñas />
        <Reseñas />
      </TabPanel>
      <Pagos />

    </div>
  );
}