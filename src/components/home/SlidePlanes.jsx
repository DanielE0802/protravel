import React from "react";
import CardPlanes from "./CardPlanes";

import "../scss/home.css";

class SlidePlanes extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >  
        <h3 style={{width:"79%", fontFamily:"Roboto", fontSize:"20px", color:"#828282"}}>Nuestros</h3>
        <h3 style={{width:"79%",  fontFamily:"Roboto", fontSize:"30px", color:"#343434"}}>Lugares sugeridos</h3>
        <div
          style={{
            display: "flex",
            overflowY: "hidden",
            overflowX: "auto",
            maxWidth: "80%",
          }}
        >
          <CardPlanes
            destiny="Cali"
            destinyPrice="150000"
            destinyDescription="descripción del plan"
            url="https://www.cali.gov.co/gobierno/info/principal/media/pubInt/thumbs/thpub_700x400_155052.jpg"
          />
          <CardPlanes
            destiny="Palmira"
            destinyPrice="150000"
            destinyDescription="descripción del plan"
            url="https://investpacific.org/wp-content/uploads/empresas-extranjeras-comprometidas-con-el-desarrollo-de-palmira.jpg"
          />
          <CardPlanes
            destiny="San Andres"
            destinyPrice="150000"
            destinyDescription="descripción del plan"
            url="https://media.staticontent.com/media/pictures/ecc404e8-9a99-46b0-a56a-ead992b5166e"
          />
          <CardPlanes
            destiny="Valle Del Cocora"
            destinyPrice="150000"
            destinyDescription="descripción del plan"
            url="https://cdn.baquianos.com/img/blog/2019/21/-m4qx360.jpg"
          />
          <CardPlanes
            destiny="Santa Marta"
            destinyPrice="150000"
            destinyDescription="descripción del plan"
            url="https://www.futbolred.com/files/article_main/files/crop/uploads/2021/03/15/604f8d5b36afa.r_1615911851449.0-50-1024-563.jpeg"
          />
          <CardPlanes
            destiny="Playa Blanca"
            destinyPrice="150000"
            destinyDescription="descripción del plan"
            url="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/54/23.jpg"
          />
          <CardPlanes
            destiny="Bogotá"
            destinyPrice="150000"
            destinyDescription="descripción del plan"
            url="https://upload.wikimedia.org/wikipedia/commons/2/24/Bogot%C3%A1_Colpatria_Night.jpg"
          />
          <CardPlanes
            destiny="Cartagena"
            destinyPrice="150000"
            destinyDescription="descripción del plan"
            url="http://www.colombiaaprende.edu.co/sites/default/files/files_public/imagenes_agenda/shutterstock_1534914158.jpg"
          />
        </div>
      </div>
    );
  }
}

export default SlidePlanes;
