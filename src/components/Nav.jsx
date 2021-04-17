import React from 'react'
import Logo from '../img/globo.png'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, IconButton, List } from '@material-ui/core'
import theme from './theme/themeconfig'
import MenuIcon from '@material-ui/icons/Menu'
import Lista from './Lista'

const useStyles = makeStyles(theme =>({
    offset: theme.mixins.toolbar,
    bar:{
        flexGrow:1
    }
    
}))

const Nav = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <Typography variant="h6" className={classes.bar}>
                  Logo
                </Typography>
                <IconButton color="inherit">
                  <MenuIcon/>
                </IconButton>
              </Toolbar>
            </AppBar>
            <div className={classes.offset}>k
            </div>
        </div>
    )
}

export default Nav


