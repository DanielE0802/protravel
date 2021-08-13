import React from "react";
import CardPlanes from "./CardPlanes";

import "../scss/home.scss";

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
      
        <h3 style={{width:"79%", fontFamily:"Roboto", fontSize:"20px", color:"#828282"}}>{this.props.title}</h3>
        <h3 style={{width:"79%",  fontFamily:"Roboto", fontSize:"30px", color:"#343434"}}>{this.props.subtitle}</h3>
        <div
          style={{
            display: "flex",
            overflowY: "hidden",
            overflowX: "auto",
            maxWidth: "80%",
            
          }}
        >

          {this.props.data.map((Element)=>{
            return (
              <CardPlanes
            destiny={Element.name}
            destinyPrice={Element.price}
            destinyDescription={Element.description}
            url={Element.url}
          />
            )})}
          
        </div>
      </div>
    );
  }
}

export default SlidePlanes;
