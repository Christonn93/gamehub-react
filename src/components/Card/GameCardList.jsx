import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, useTheme, useMediaQuery } from "@mui/material";

const GameCardList = ({ width, name, image, id, genres, platforms, tags }) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("sm"));
 const navigate = useNavigate();

 // Default image value if image is not matching
 const imageMissing = "https://via.placeholder.com/600x400?text=Image+missing";
 const CardBase = {
  display: "flex",
  flexDirection: "row",
  gap: 2,
  maxWidth: 1150,
  maxHeight: 350,
 };
 const CardBaseMobile = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 2,
  maxWidth: 1150,
 };

 return (
  <Card sx={!isMobile ? CardBase : CardBaseMobile}>
   <Box maxWidth={!isMobile ? 350 : 400} width={2 / 2}>
    <CardMedia height="150" component="img" image={image ? image : imageMissing} />
   </Box>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-between",
     width: 2 / 2,
    }}
   >
    <CardContent
     sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      width: "100%",
     }}
    >
     <Box
      sx={{
       display: "flex",
       flexDirection: "column",
       width: "100%",
      }}
     >
      <Typography gutterBottom variant="h5" component="div">
       {name}
      </Typography>
     </Box>
    </CardContent>
    <CardActions>
     <Button variant="contained" color="primary">
      Details
     </Button>
    </CardActions>
   </Box>
  </Card>
 );
};

export default GameCardList;
