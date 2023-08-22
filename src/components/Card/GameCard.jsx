import React from "react";

import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const GameCard = ({ width, name, image, id, genres, platforms, tags, cardLayout }) => {
 // Default image value if image is not matching
 const imageMissing = "https://via.placeholder.com/600x400?text=Image+missing";

 const GameCardGrid = (
  <Card sx={{ maxWidth: width }} key={id}>
   <CardMedia sx={{ height: 140 }} image={image} title="Image of game" />
   <CardContent>
    <Typography gutterBottom variant="h5" component="div">
     {name}
    </Typography>
   </CardContent>
   <CardActions>
    <Button variant="contained" color="primary" size="small">
     Details
    </Button>
   </CardActions>
  </Card>
 );

 const GameCardList = (
  <Card sx={{ maxWidth: width }} key={id}>
   <Box>
    <CardMedia height="250" component="img" image={image ? image : imageMissing} alt={image ? "Main image of venue" : "Image is missing"} />
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
     <Typography gutterBottom variant="h5" component="div">
      {name}
     </Typography>
    </CardContent>
    <CardActions>
     <Button variant="contained" color="primary" size="small">
      Details
     </Button>
    </CardActions>
   </Box>
  </Card>
 );

 return <>{cardLayout === true ? <GameCardList /> : <GameCardGrid />}</>;
};

export default GameCard;
