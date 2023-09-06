import React from "react";

import { Box, Typography } from "@mui/material";

import RawgSection from "../components/RAWG/RawgSection";
import HomeSection from "../components/GameList/HomeSection";

const Home = () => {
 return (
  <Box
   sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
   }}
  >
   <Typography variant="h2" component={"h1"}>
    New and popular games
   </Typography>
   <Box>
    <HomeSection />
   </Box>
   <RawgSection />
  </Box>
 );
};

export default Home;
