import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Box, Grid } from "@mui/material";

const ImageSection = ({ image, images }) => {
 const imageArray = images.results;

 if (imageArray === undefined) return;

 return (
  <Grid container spacing={{ xs: 1, sm: 1, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
   <Grid item xs={1} sm={8} md={6}>
    <img src={image} alt="" className="mainImage" />
   </Grid>
   <Grid item xs={1} sm={8} md={6}>
    <Carousel className="imageCarousel" showIndicators={false} autoPlay={true}>
     {imageArray.map((e) => {
      return (
       <div>
        <img src={e.image} alt={e.image} />
       </div>
      );
     })}
    </Carousel>
   </Grid>
  </Grid>
 );
};

export default ImageSection;
