import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, IconButton, MuiThemeProvider } from "@material-ui/core";
import theme from "./theme/themeconfig";
import MenuIcon from "@material-ui/icons/Menu";
import Lista from "./Lista";
import LanguageIcon from "@material-ui/icons/Language";
import clsx from "clsx";
// import Drawer from '@material-ui/core/Drawer';
import Logo from "../img/mundo.png";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const myStyleA = {
  textDecoration: "none",
  color: "#fff",
};

const useStyles = makeStyles({
  offset: theme.mixins.toolbar,
  bar: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  margin: {
    marginLeft: "15px",
  },

  cajaMargin: {
    marginRight: "50px",
  },
  cajaPadding: {
    paddingRight: "20px",
    paddingLeft: "20px",
  },
});

export default function Nav() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Lista></Lista>
    </div>
  );

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <div>
          <AppBar
            position="fixed"
            color="primary"
            className={classes.cajaPadding}
          >
            <Toolbar>
              <a href="/protravel" className={classes.bar} style={myStyleA}>
                <Typography variant="h6" style={{ display: "flex" }}>
                  <img
                    style={{ width: "45px", height: "45px" }}
                    src={Logo}
                    alt=""
                  />
                  <p style={{ margin: "10px" }}>ProTravel</p>
                </Typography>
              </a>
              <div>
                <Hidden xsDown>
                  <IconButton color="inherit" className={classes.cajaMargin}>
                    <LanguageIcon />

                    <Typography
                      variant="h6"
                      className={(classes.bar, classes.margin)}
                    >
                      Unete a nosotros
                    </Typography>
                  </IconButton>
                </Hidden>
                {["right"].map(() => (
                  <React.Fragment key={"right"}>
                    <IconButton
                      color="inherit"
                      onClick={toggleDrawer("right", true)}
                    >
                      {<MenuIcon />}
                    </IconButton>
                    <SwipeableDrawer
                      anchor={"right"}
                      open={state["right"]}
                      onClose={toggleDrawer("right", false)}
                      onOpen={toggleDrawer("right", true)}
                    >
                      {list("right")}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </div>
            </Toolbar>
          </AppBar>
          <div className={classes.offset}></div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
