import React from 'react';
import Box from '@material-ui/core/Box';
import Menu from '@mui-treasury/components/menu/collapsible';
import { useGatsbyCollapsibleMenuStyles } from '@mui-treasury/styles/collapsibleMenu/gatsby';
import '../scss/user.scss'

const GatsbyCollapsibleMenuStyle = () => {
  const [index, setIndex] = React.useState(-1);
  const createOnClick = idx => () => setIndex(idx);
  return (
    <Box minWidth={343}>
      <Menu
        collapsed
        useStyles={useGatsbyCollapsibleMenuStyles}
        style={{width: '30%', minWidth: 200}}
      >
        <Menu.ListItem button selected={index === 1} onClick={createOnClick(1)}>
          List item 1
        </Menu.ListItem>
        <Menu.ListItem button selected={index === 2} onClick={createOnClick(2)}>
          List item 2
        </Menu.ListItem>
        <Menu.ListItem button selected={index === 3} onClick={createOnClick(3)}>
          List item 3
        </Menu.ListItem>
        <Menu.ListItem button selected={index === 4} onClick={createOnClick(4)}>
          List item 4
        </Menu.ListItem>
      </Menu>
    </Box>
  );
};

export default GatsbyCollapsibleMenuStyle;