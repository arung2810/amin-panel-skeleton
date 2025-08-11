import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";


import Video1 from "../../assets/images/video1.png";

function AuthSlider() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider {...settings}>
        <Box>
          <img src={Video1} alt={Video1} />  
        </Box>
        <Box>
          <img src={Video1} alt={Video1} />  
        </Box>
        <Box>
          <img src={Video1} alt={Video1} />  
        </Box>
      </Slider>
    </>
  );
}

export default AuthSlider;
