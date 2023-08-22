import React from "react";
import { Link } from "react-router-dom";

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
   <Button variant="contained" color="primary" component={Link} to={`/list/game/${id}`}>
      Game details
     </Button>
   </CardActions>
  </Card>
 );
};

export default GameCardGrid;
