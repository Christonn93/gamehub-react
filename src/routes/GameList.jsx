import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Grid, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";

import GridViewIcon from "@mui/icons-material/GridView";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";

import useApi from "../hooks/useApi";

// Importing components
import SearchBar from "../components/SearchBar/SearchBar";
import GridBase from "../components/Grid/GridBase";
import GameCardGrid from "../components/Card/GameCardGrid";
import GameCardList from "../components/Card/GameCardList";

const GameList = () => {
 const [dataResults, setDataResults] = useState([]);
 const [layout, setLayout] = useState(false);

 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("sm"));
 const navigate = useNavigate();

 const apiKey = process.env.REACT_APP_API_KEY;

 const { data, isLoading, isError } = useApi(`/games?key=${apiKey}&page_size=1000`, "GET");
 if (isError) return <>Error</>;

 setTimeout(() => {
  setDataResults(data.results);
 }, 20);

 if (dataResults === undefined) return null;

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
   <Box>
    <Box
     sx={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 2,
     }}
    >
     <Typography variant="h1" component={"h1"}>
      {data.seo_h1}
     </Typography>
     {layout === false ? (
      <IconButton onClick={() => setLayout(true)}>
       <GridViewIcon color="secondary" />
      </IconButton>
     ) : (
      <IconButton onClick={() => setLayout(false)}>
       <SplitscreenIcon color="secondary" />
      </IconButton>
     )}
    </Box>
    <Box sx={!isMobile ? desktopBox : mobileBox}>
     <Box>
      <SearchBar />
     </Box>
     {layout === true ? (
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
   </Box>
  </>
 );
};

export default GameList;
