import React, { Component } from "react";
import "./scss/search.css";
import "../js/search";
import logo from "../img/mundo.png";

export default class Search extends Component {
  render() {
    return (
      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        <img src={logo} alt="logo-Protravel" style={{ width: "11vw", paddingTop:"7vh"}}></img>
        <h2 style={{width:"100%", marginTop:"-5px"}}> 
        <span className="titleHome pro" >Pro</span>
        <span className="titleHome travel">Travel</span>
        </h2>
        <main>
          <div className="container" style={{width:"100vw"}}>
            <div className="search-box" style={{background: "rgba(255, 255, 255, 0.2)" }} >
              <div
                className="search-icon"
                style={{ transform: "rotate(45deg)" }}
              >
                <i className="fa fa-search search-icon"></i>
              </div>
              <form action="" className="search-form">
                <input
                  type="text"
                  placeholder="Destinos"
                  id="search"
                  autocomplete="off"
                />
              </form>
              <svg
                className="search-border"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 671 111"
                style={{ enableBackground: "new 0 0 671 111" }}
                xmlSpace="preserve"
              >
                <path
                  className="border"
                  d="M335.5,108.5h-280c-29.3,0-53-23.7-53-53v0c0-29.3,23.7-53,53-53h280"
                />
                <path
                  className="border"
                  d="M335.5,108.5h280c29.3,0,53-23.7,53-53v0c0-29.3-23.7-53-53-53h-280"
                />
              </svg>
              <div className="go-icon">
                <i className="fa fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
