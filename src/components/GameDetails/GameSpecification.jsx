import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Paper, Typography } from "@mui/material";

const GameSpecification = ({ data }) => {
 const { developers, publishers, website, genres, released, tags, platforms } = data;

 console.log(data);

 // Flat mapping tags
 const tagsArray = tags.flatMap((e) => e.name);
 //  console.log("tagsArray", tagsArray);

 // Flat mapping genres
 const genresArray = genres.flatMap((e) => e.name);
 //  console.log("genresArray", genresArray);

 // Flat mapping platforms
 const platformArray = platforms.flatMap((e) => e.platform.name);
  console.log("platformArray", platformArray);

 const { name: developers_name } = developers[0];
 const { name: publishers_name } = publishers[0];

 return (
  <>
   <Box 
   component={Paper}
   sx={{
    p: 1,
   }}>
    <Typography variant="body1">Genres: {genresArray.join(", ")}</Typography>
    <Box mt={1} mb={2}>
     <Typography variant="h4" mb={1}>
      Game details
     </Typography>
     <Typography variant="body1">Released: {released}</Typography>
     <Typography variant="body1">Developer: {developers_name}</Typography>
     <Typography variant="body1">Publishers: {publishers_name}</Typography>
     <Typography variant="body2">Platforms: {platformArray.join(", ")}</Typography>

     <Button variant="contained" color="success" component={Link} to={website} target="_blank" sx={{ marginTop: 2 }}>
      Official game site
     </Button>
    </Box>
    <Typography variant="body2">#{tagsArray.join(", #")}</Typography>
    </Box>
  </>
 );
};

export default GameSpecification;
