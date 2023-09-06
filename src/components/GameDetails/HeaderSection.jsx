import React from "react";

import { Grid, Rating, Typography } from "@mui/material";

const HeaderSection = ({ name, ratings, maxRatings }) => {
 return (
  <>
    <Grid
     container
     spacing={{ xs: 1, md: 2 }}
     columns={{ xs: 1, sm: 8, md: 12 }}
     sx={{
      justifyContent: "space-between"
     }}
    >
     <Grid item xs={1} sm={2} md={7}>
      <Typography variant="h1" component={"h1"}>
       {name}
      </Typography>
     </Grid>
     <Grid item xs={1} sm={2} md={2} sx={{alignSelf: "center"}}>
      <Rating name="Rating" value={ratings} max={maxRatings} precision={0.5} readOnly />
     </Grid>
    </Grid>
  </>
 );
};

export default HeaderSection;
