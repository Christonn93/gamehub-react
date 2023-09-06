import React from "react";

import { Alert, Grid, Box, Skeleton } from "@mui/material";

// Importing api call hooks
import useApi from "../../hooks/useApi";

// Importing components
import GridBase from "../Grid/GridBase";
import GameCardList from "../Card/GameCardList";

const apiKey = process.env.REACT_APP_API_KEY;

const HomeSection = () => {
 // Calling the api
 const { data, isLoading, isError } = useApi(`/games?key=${apiKey}&page_size=100&ordering=rating`, "GET");
 const dataResults = data.results;
 if (dataResults === undefined) return null;

 console.log(dataResults);

 return (
  <Box>
   {isLoading ? (
    <>
     <GridBase>
      <Grid item xs={12} key={"skeleton-1"}>
       <Skeleton animation="wave" variant="rounded" height={150} />
      </Grid>
      <Grid item xs={12} key={"skeleton-2"}>
       <Skeleton animation="wave" variant="rounded" height={150} />
      </Grid>
      <Grid item xs={12} key={"skeleton-3"}>
       <Skeleton animation="wave" variant="rounded" height={150} />
      </Grid>
      <Grid item xs={12} key={"skeleton-4"}>
       <Skeleton animation="wave" variant="rounded" height={150} />
      </Grid>
     </GridBase>
    </>
   ) : isError ? (
    <Alert severity="error">We could not load the data</Alert>
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
 );
};

export default HomeSection;
