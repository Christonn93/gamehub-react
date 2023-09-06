import React, { useState } from "react";

import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";

import GridViewIcon from "@mui/icons-material/GridView";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";

// Importing api call hooks
import useApi from "../hooks/useApi";

// Importing components
import SearchBar from "../components/SearchBar/SearchBar";
import ListSection from "../components/GameList/ListSection";
import FilterSection from "../components/GameList/FilterSection";

const GameList = () => {
 const [dataResults, setDataResults] = useState([]);
 const [layout, setLayout] = useState(false);
 const apiKey = process.env.REACT_APP_API_KEY;

 const { data, isLoading, isError } = useApi(`/games?key=${apiKey}&page_size=1000`, "GET");
 const { data: platformData, isLoading: loading } = useApi(`/platforms/lists/parents?key=${apiKey}&page_size=1000`, "GET");
 const { data: genreData } = useApi(`/genres?key=${apiKey}&page_size=1000`, "GET");
 const { data: tagsData } = useApi(`/tags?key=${apiKey}&page_size=1000`, "GET");

 if (isError) return <>Error {isError}</>;

 setTimeout(() => {
  setDataResults(data.results);
 }, 20);

 if (dataResults === undefined) return null;

 return (
  <>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     gap: 1,
    }}
   >
    <Box
     sx={{
      display: "flex",
      justifyContent: "space-between",
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
    <SearchBar />
    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
     <Grid item xs={1} sm={8} md={4}>
      {isLoading ? <Skeleton animation="wave" variant="rounded" height={150} /> : <FilterSection platformData={platformData} genreData={genreData} tagsData={tagsData} loading={loading} />}
     </Grid>
     <Grid item xs={1} sm={8} md={8}>
      {isLoading ? (
       <Box
        sx={{
         display: "flex",
         flexDirection: "column",
         gap: 2,
        }}
       >
        <Skeleton animation="wave" variant="rounded" height={150} />
        <Skeleton animation="wave" variant="rounded" height={150} />
        <Skeleton animation="wave" variant="rounded" height={150} />
        <Skeleton animation="wave" variant="rounded" height={150} />
        <Skeleton animation="wave" variant="rounded" height={150} />
        <Skeleton animation="wave" variant="rounded" height={150} />
        <Skeleton animation="wave" variant="rounded" height={150} />
        <Skeleton animation="wave" variant="rounded" height={150} />
        <Skeleton animation="wave" variant="rounded" height={150} />
       </Box>
      ) : (
       <>
        <ListSection dataResults={dataResults} layout={layout} />
       </>
      )}
     </Grid>
    </Grid>
   </Box>
  </>
 );
};

export default GameList;
