import React from "react";
import CardPlanes from "./CardPlanes";

import "./scss/home.css";

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
        <h1>Planes y lugares sugeridos</h1>
        <div
          style={{
            display: "flex",
            overflowY: "hidden",
            overflowX: "auto",
            maxWidth: "80%",
          }}
        >
          <CardPlanes></CardPlanes>
          <CardPlanes></CardPlanes>
          <CardPlanes></CardPlanes>
          <CardPlanes></CardPlanes>
          <CardPlanes></CardPlanes>
          <CardPlanes></CardPlanes>
          <CardPlanes></CardPlanes>
          <CardPlanes></CardPlanes>
        </div>
      </div>
    );
  }
}

export default SlidePlanes;
