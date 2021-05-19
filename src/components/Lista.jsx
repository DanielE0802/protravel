import React from 'react'

import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
}from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LanguageIcon from '@material-ui/icons/Language';
// import Typography from '@material-ui/core/Typography'
// import { IconButton } from '@material-ui/core'

const myStyleA = {
    textDecoration:"none",
    color: "#202020",
  };



const Lista = () => {
    return (
        <div>
            <List component="nav" >
            <a href="/unete" style={myStyleA}>
                    <ListItem button>
                    <ListItemIcon>
                    <LanguageIcon/>
                    </ListItemIcon>
                    <ListItemText  >
                   
                    Unete a nosotros
                   
                   
                    </ListItemText>
                </ListItem> 
                </a>
                <a href="/login" style={myStyleA}>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Iniciar sesión
                    </ListItemText>
                </ListItem>
                </a>
                <a href="/register" style={myStyleA}>
                <ListItem button>
                    <ListItemIcon>
                        <PersonAddIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Registrarse
                    </ListItemText>
                </ListItem>
                </a>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <PersonAddIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Detinos
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    )
}

export default Lista
