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

const Lista = () => {
    return (
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Iniciar sesión
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PersonAddIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Registrarse
                    </ListItemText>
                    
                  
                    

                </ListItem>
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
