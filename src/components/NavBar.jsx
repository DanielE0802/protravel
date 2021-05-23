import React from "react";
import Nav from "./Nav";
import "./scss/NavBar.scss";

export class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <p></p>
      </div>
    );
  }
}

export default NavBar;
