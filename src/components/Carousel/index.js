import React from "react";
import { Carousel } from "react-responsive-carousel";
import { data } from "./Constants";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  img: {
    [theme.breakpoints.up("sm")]: {
      height: 400
    }
  },
  legend: {
    position: "absolute",
    bottom: "40px",
    top: "40%",
    bottom: "50%",
    left: "50%",
    marginLeft: "-45%",
    width: "90%",
    borderRadius: "10px",

    color: "#fff"
  },
  title: {
    color: "#880E4F",
    display: "inline-block",
    fontWeight: "bold",
    background: `linear-gradient(#1b5e20, transparent, transparent), no-repeat center`
  },
  subtitle: {
    // color: theme.palette.secondary.main,
    display: "inline-block",
    background: `linear-gradient(transparent, transparent, #212121), no-repeat center`
  }
}));

const CarouselAuto = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={0}
        dynamicHeight={false}
      >
        {data.map(item => {
          return (
            <div>
              <img src={item.image} className={classes.img} />

              <div className={classes.legend}>
                <h2 className={classes.title}>{item.title}</h2>
                <br />
                <p className={classes.subtitle}>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CarouselAuto;
