import React from "react";

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const GameCardGrid = ({ width, name, image, id, genres, platforms, tags }) => {
 return (
  <Card sx={{ maxWidth: width }} key={id}>
   <CardMedia sx={{ height: 140 }} image={image} title="Image of game" />
   <CardContent>
    <Typography gutterBottom variant="h5" component="div">
     {name}
    </Typography>
   </CardContent>
   <CardActions>
    <Button variant="contained" color="primary">
     Details
    </Button>
   </CardActions>
  </Card>
 );
};

export default GameCardGrid;
