import React from "react";

import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import rawg from "../../assets/rawg-landing.png";

const RawgSection = () => {
  return (
   <Box
    component={Card}
    sx={{
     p: 2,
    }}
   >
    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
     <Grid
      item
      xs={1}
      sm={8}
      md={4}
      sx={{
       display: "flex",
       flexDirection: "column",
       gap: 2,
      }}
     >
      <Typography variant="h2" component={"h3"}>
       Site information
      </Typography>
      <Typography variant="body1">All games displayed comes from rawg using there API. Credits goes to the creators of rawg API</Typography>
      <Button variant="outlined" color="info" component={Link} to={"https://rawg.io/"} target="_blank">
       Visit official website
      </Button>
     </Grid>
     <Grid item xs={1} sm={8} md={8}>
      <img src={rawg} alt="Site display" className="rawgImage" />
     </Grid>
    </Grid>
   </Box>
  )
}

export default RawgSection