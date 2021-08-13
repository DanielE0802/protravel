import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import dataList from '../../data/data.json';
import RoomIcon from '@material-ui/icons/Room';
import { blue } from '@material-ui/core/colors';
import KitchenIcon from '@material-ui/icons/Kitchen';
import WifiIcon from '@material-ui/icons/Wifi';
import PetsIcon from '@material-ui/icons/Pets';
import PoolIcon from '@material-ui/icons/Pool';
import PrecioHotel from './PrecioHotel';
import '../scss/general.scss'



class Hoteles extends React.Component {
    render() {
        return (
            <div>
                <GridList cellHeight={200} cols={3}>
                    {dataList.map((data) => (
                        <GridListTile key={data.id} cols={data.cols || 1}>
                            <img loading="lazy" src={data.image} alt="" />
                        </GridListTile>
                    ))}
                </GridList>
                <h1 style={{ display: 'flex', justifyContent: 'start', paddingTop: 40, marginLeft:'5%', marginRight:'5%' }}>Ayenda Esperanza AC</h1>
                <h3 style={{ display: 'flex', marginLeft:'5%', marginRight:'5%'}}>
                    <RoomIcon style={{ color: blue[500] }} />Cartagena
                </h3>
                <p style={{ display: 'flex', justifyContent: 'space-between', marginLeft:'5%', marginRight:'5%'}}>
                Hotel Ayenda Marie Real 1808 está localizado en Cartagena de Indias. Cuenta con wi-fi gratis en zonas comunes, campo de golf y recepción 24 hrs, además de servicio de guarda-equipaje gratis.                </p>
                <h1 style={{ display: 'flex', justifyContent: 'start', paddingTop: 40,  marginLeft:'5%' }}>Servicios</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft:'5%', marginRight:'5%'}}>
                    <div>
                        <p>
                            <KitchenIcon style={{ color: blue[500] }} />Cocina
                    </p>
                        <p>
                            <WifiIcon style={{ color: blue[500] }} />Wifi
                    </p>
                        <p>
                            <PetsIcon style={{ color: blue[500] }} />Se permite mascotas
                    </p>
                        <p>
                            <PoolIcon style={{ color: blue[500] }} />Pscina
                    </p>
                    </div>
                    <div>
                    <PrecioHotel/>
                    </div>
                </div>
            </div>
        );

    };
};

export default Hoteles;