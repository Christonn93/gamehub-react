import React from "react";

import { Grid } from "@mui/material";

const GridBase = ({children}) => {
 return (
  <Grid container spacing={2} columns={{ xs: 2, md: 12 }} rowSpacing={3} justifyContent={{ xs: "center", md: "start" }} alignItems="center">
   {children}
  </Grid>
 );
};

export default GridBase;
