import React from "react";

import { Box, Grid, Paper, Typography } from "@mui/material";

import GameSpecification from "./GameSpecification";

const DescriptionSection = ({ description, gameData }) => {
 return (
   <Grid
    container
    spacing={{ xs: 2, md: 2 }} 
    columns={{ xs: 1, sm: 8, md: 12 }}
    sx={{
     justifyContent: "space-between",
    }}
   >
    <Grid item xs={1} sm={2} md={6}>
      <Box
         component={Paper}
       sx={{
        p: 1,
       }}
      >
       <Typography variant="h3" mb={1} mt={1}>
        Description
       </Typography>
       <Typography variant="body1">{description}</Typography>
      </Box>
    </Grid>
    <Grid item xs={1} sm={2} md={6}>
     <GameSpecification data={gameData} />
    </Grid>
   </Grid>
 );
};

export default DescriptionSection;
