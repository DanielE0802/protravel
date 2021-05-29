import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import dataList from '../data/data.json';
import Paginacion from './Paginacion';
import RoomIcon from '@material-ui/icons/Room';
import { blue } from '@material-ui/core/colors';
import KitchenIcon from '@material-ui/icons/Kitchen';
import WifiIcon from '@material-ui/icons/Wifi';
import PetsIcon from '@material-ui/icons/Pets';
import PoolIcon from '@material-ui/icons/Pool';
import PrecioHotel from './PrecioHotel';



class Hoteles extends React.Component {
    render() {
        return (
            <div>
                <GridList cellHeight={200} cols={3}>
                    {dataList.map((data) => (
                        <GridListTile key={data.id} cols={data.cols || 1}>
                            <img src={data.image} alt="" />
                        </GridListTile>
                    ))}
                </GridList>
                <h1 style={{ display: 'flex', justifyContent: 'start', paddingTop: 40 }}>Lugar</h1>
                <h3 >
                    <RoomIcon style={{ color: blue[500] }} />Ubicacion
                </h3>
                <p>
                    Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar
                    Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar
                    Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar
                    Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar
                    Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar
                    Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar Descripcion del lugar
                </p>
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
                    <div style={{marginTop:-80}}>
                    <PrecioHotel/>
                    </div>
                </div>
                <Paginacion />
            </div>
        );

    };
};

export default Hoteles;