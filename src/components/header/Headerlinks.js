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
import CustomDropdown from "./CustomDropdown";
import Button from "./Button";
import Swal from "sweetalert2"
import {nameUserLogin} from "../../js/login"


import styles from "../styles/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  let dataLogin = localStorage.getItem("login")
  console.log(dataLogin)
  if(dataLogin === "true"){

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
                <Link to="/cuenta" className={classes.dropdownLink} id="miCuentaInfo" >
                  Mi Cuenta
                </Link>,
                <Link to="/" className={classes.dropdownLink} onClick={()=>{
                  Swal.fire({
                        position: 'bottom-start',
                        icon: 'success',
                        title: `Hasta pronto ${nameUserLogin}`,
                        showConfirmButton: false,
                        timer: 4500})
                  localStorage.removeItem("login")
                }}>
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

  else{
    
  return (
    <List className={classes.list} >
      
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        >
          <LanguageIcon className={classes.icons} /><Link to="/Unete"> Unete a nosotros</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem} id="btnNavbar" onClick={()=>{
        
        setTimeout(()=>{
          let dataLogin = localStorage.getItem("login")

          if(dataLogin === true){
            let changeOne = document.getElementById("changeOne")
            let changeTwo = document.getElementById("changeTwo")

            if(changeOne !== null){

              changeOne.textContent = "Mi cuenta"
            changeTwo.textContent = "Cerrar sesión"
            changeOne.setAttribute("href", "/cuenta")
            console.log(changeOne)
            }
          }


         

        },300)

            // changeOne.textContent = "Mi cuenta"
            // changeTwo.textContent = "Cerrar sesión"
            // changeOne.setAttribute("href", "/micuenta")
    

      }}      >

      
        <CustomDropdown
          noLiPadding
          buttonText="Usuarios"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={PersonIcon}
          dropdownList={[
            <Link to="/login" className={classes.dropdownLink} id="changeOne" >
              Iniciar sesión
            </Link>,
            <Link to="/register" className={classes.dropdownLink} id= "changeTwo">
                 Crear cuenta
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

  }