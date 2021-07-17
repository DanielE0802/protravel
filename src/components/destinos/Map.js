import React, { Component } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';
const AnyReactComponent = ({ text }) => <div>{text}</div>;



class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 10.394103188025364,
      lng: -75.48560940125179
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '130vh', width: '50vw', marginTop:"11vh", marginLeft:"20px", }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCf-QT5SFT0dcrFYwplV2WwgffG9Kxq1h4"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={10.394103188025364}
            lng={-75.48560940125179}
            text={<LocationOnIcon style={{color:"#EA4335"}}></LocationOnIcon>}
          />

          <AnyReactComponent
            lat={6.406625519871455}
            lng={-75.55683250591362}
            text={<LocationOnIcon style={{color:"#EA4335"}}></LocationOnIcon>}
          />

          
          <AnyReactComponent
            lat={4.8836729139135375}
            lng={-74.09683202403008}
            text={<LocationOnIcon style={{color:"#EA4335"}}></LocationOnIcon>}
          />

            <AnyReactComponent
            lat={3.6024867007717534}
            lng={-76.51253932038934}
            text={<LocationOnIcon style={{color:"#EA4335"}}></LocationOnIcon>}
          />

           <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace lat={59.955413} lng= {"-75.48560940125179"} text={'B'} /* road circle */ />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;