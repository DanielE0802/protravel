import React, { useState } from 'react';
import { useBorderSelectStyles } from '@mui-treasury/styles/select/border';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/541

const BorderSelect = () => {
  const [val,setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const borderSelectClasses = useBorderSelectStyles();

  // moves the menu below the select input
  const menuProps = {
    classes: {
      list: borderSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + borderSelectClasses.icon}/>
    )};

  return (
    <FormControl>
      <InputLabel
        className={borderSelectClasses.label}
        id="inputLabel"
      >Número de huespedes</InputLabel>
      <Select
        disableUnderline
        classes={{ root: borderSelectClasses.select, }}
        labelId="inputLabel"
        IconComponent={iconComponent}
        MenuProps={menuProps}
        value={val}
        onChange={handleChange}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={3}>4</MenuItem>
        <MenuItem value={3}>5</MenuItem>
      </Select>
    </FormControl>
  );
};


export default BorderSelect;