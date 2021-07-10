/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import LanguageIcon from "@material-ui/icons/Language";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
// core components
import CustomDropdown from "./CustomDropdownLogueado";
import Button from "./ButtonLogueado";

import styles from "../styles/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >
          <LanguageIcon className={classes.icons} /><Link to="/Unete"> Unete a nosotros</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Usuarios"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={PersonIcon}
          dropdownList={[
            <Link to="/cuenta" className={classes.dropdownLink}>
              Mi Cuenta
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Cerrar sesión
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={ShoppingCartIcon}
          dropdownList={[
            <Link to="/login" className={classes.dropdownLink}>
              Item 1
            </Link>,
            <Link to="/register" className={classes.dropdownLink}>
                 Item 2
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
