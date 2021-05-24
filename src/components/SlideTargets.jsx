import React from "react";
import {
  makeStyles,
  MuiThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import theme from "./theme/themeconfig";
import Grid from "@material-ui/core/Grid";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const useStyles = makeStyles({
  root: {
    maxWidth: "70vw",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.primary,
  },
  img: {
    height: "35vw",
    display: "block",
    maxWidth: "70vw",
    overflow: "hidden",
    width: "100%",
  },
});

function SwipeableTextMobileStepper(props) {

  let galery= props.data.data.galery
let arrayOfGalery = [
 
  {
    label:"",
    imgPath: ""
  },
  {
    label:"",
    imgPath: ""
  },
  {
    label:"",
    imgPath: ""
  },
  {
    label:"",
    imgPath: ""
  },
  {
    label:"",
    imgPath: ""
  },
];


for (let i=0 ; i<galery.length; i++){
  arrayOfGalery[i].label= galery[i].lugar
  arrayOfGalery[i].imgPath= galery[i].img
}

const classes = useStyles();
const theme = useTheme();
const [activeStep, setActiveStep] = React.useState(0);
const maxSteps = arrayOfGalery.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container direction="row" justify="center" alignItems="center">
        <div
          className={classes.root}
          color="primary"
          style={{ alignSelf: "center" }}
        >
          <Paper
            square
            elevation={0}
            className={classes.header}
            color="primary"
          >
            <Typography>{arrayOfGalery[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {arrayOfGalery.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
      </Grid>
    </MuiThemeProvider>
  );
}

export default SwipeableTextMobileStepper;
