import { Grid } from "@mui/material";
import React from "react";

const GridGallery = (data, children) => {
 return (
  <Grid container spacing={2}>
   {data.map((e) => (
    <Grid item xs={4} key={e.id}>
     {children}
    </Grid>
   ))}
  </Grid>
 );
};

export default GridGallery;
