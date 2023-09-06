import React from "react";

import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";

// Importing components
import GridBase from "../Grid/GridBase";
import GameCardGrid from "../Card/GameCardGrid";
import GameCardList from "../Card/GameCardList";

const ListSection = ({ dataResults, layout }) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("sm"));

 const mobileBox = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
 };

 const desktopBox = {
  display: "flex",
  gap: 3,
 };

 return (
  <>
   <Box sx={!isMobile ? desktopBox : mobileBox}>
    {layout ? (
     <GridBase>
      {dataResults.map((e) => (
       <Grid item xs={2} sm={4} md={4} key={e.id}>
        <GameCardGrid name={e.name} id={e.id} genres={e.genres} platforms={e.platforms} image={e.background_image} />
       </Grid>
      ))}
     </GridBase>
    ) : (
     <GridBase>
      {dataResults.map((e) => (
       <Grid item xs={12} key={e.id}>
        <GameCardList width={"100"} name={e.name} id={e.id} genres={e.genres} platforms={e.platforms} image={e.background_image} />
       </Grid>
      ))}
     </GridBase>
    )}
   </Box>
  </>
 );
};

export default ListSection;
