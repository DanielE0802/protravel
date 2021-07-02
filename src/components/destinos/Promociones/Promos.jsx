import React from 'react';
import '../../scss/promos.scss';
import Regiones from '../../Regiones';
import TarjetaPromo from '../Promociones/TarjetaPromo';




class Promos extends React.Component {
    render() {
        return (
            <div className="Promos">
                <div style={{ marginLeft: 0, marginTop: 130}}>
                    <Regiones></Regiones>
                </div>
                <div>
                    <h1>Aprovecha todas  las promociones del momento</h1>
                    <p>Lista de cupones promocionales y códigos promocionales. ¡Compre más barato!</p>
                    <TarjetaPromo></TarjetaPromo>
                    <TarjetaPromo></TarjetaPromo>
                    <TarjetaPromo></TarjetaPromo>
                    <TarjetaPromo></TarjetaPromo>
                </div>
            </div>
        );

    };
};

export default Promos;