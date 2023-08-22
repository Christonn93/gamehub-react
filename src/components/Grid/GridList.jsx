import React from "react";

import { Grid } from "@mui/material";

const GridList = (data, children) => {
 return (
  <Grid container spacing={2}>
   {data.map((e) => (
    <Grid item xs={12} key={e.id}>
     {children}
    </Grid>
   ))}
  </Grid>
 );
};

export default GridList;
