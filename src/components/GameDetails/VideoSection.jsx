import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Box, Typography } from "@mui/material";

const VideoSection = ({ data }) => {
 const videoArray = data.results;
 if (videoArray === undefined) return;

console.log(videoArray)

 return (
  <>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     gap: 2,
    }}
   >
    <Typography variant="h4">Game Trailers</Typography>
    {videoArray.length === 0 ? (
     <>
      <Typography variant="body1" color={"error"}>There was no videos found</Typography>
     </>
    ) : (
     <Carousel className="videoCarousel" showIndicators={false}>
      {videoArray.map((e) => {
       const vidUrl = e.data[Object.keys(e.data)[0]];
       return (
        <div>
         <video controls className="videoController">
          <source src={vidUrl} type="video/mp4" />
         </video>
        </div>
       );
      })}
     </Carousel>
    )}
   </Box>
  </>
 );
};

export default VideoSection;
