import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MiCuenta from '../User/MiCuenta';
import SettingsIcon from '@material-ui/icons/Settings';
import '../scss/general.scss';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
     
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: "80vh",
    paddingTop:"5vh"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant=""
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab icon={<SettingsIcon />} label="Mi Cuenta" {...a11yProps(0)} />
        <Tab label="Pedidos" {...a11yProps(1)} />
        <Tab label="Favoritos" {...a11yProps(2)} />
        <Tab label="Metodos de Pago" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div style={{ display: 'block', paddingTop:"4vh" }}>
          <MiCuenta></MiCuenta>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="container_pedidos">
          <div className="sin_pedidos">
          <RemoveShoppingCartIcon></RemoveShoppingCartIcon>
            <h2>Cuando realices tu primer pedido aparecera aqu??</h2>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="container_favoritos">
          <div className="sin_favoritos">
            <StarBorderIcon></StarBorderIcon>
            <h2>Cuando agregues tus favoritos apareceran aqu??</h2>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        metodos de pago

      </TabPanel>

    </div>
  );
}