// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle} from './my_great_place_styles.js';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}
