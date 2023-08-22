// Importing React
import React from "react";
import { Link, useParams } from "react-router-dom";

// Importing MUI
import { Box, Button, Card, Paper, Rating, Stack, Typography } from "@mui/material";

// Importing functions
import useApi from "../hooks/useApi";

const GameDetails = () => {
 let { id } = useParams();
 const apiKey = process.env.REACT_APP_API_KEY;

 const { data, isLoading, isError } = useApi(`/games/${id}?key=${apiKey}`, "GET");
 const { data: imageData, isLoading: imageIsLoading, isError: imageError } = useApi(`/games/${id}/screenshots?key=${apiKey}`, "GET");

 // Destructuring response data
 const { name, description_raw, ratings, tags, website, genres, esrb_rating, released, updated, platforms, developers, publishers, rating, rating_top, background_image, background_image_additional } =
  data;

 // Checking for undefined values
 if (developers === undefined) return null;
 if (platforms === undefined) return null;

 // Setting var value
 const { name: developers_name } = developers[0];
 const { name: publishers_name } = publishers[0];
 const platformName = platforms.flatMap((n) => n.platform.name);

 return (
  <>
   <Box>
    <Box>
     <Typography variant="h1" component={"h1"}>
      {name}
     </Typography>
    </Box>
    <Box
     mt={1}
     sx={{
      display: "flex",
      gap: 2,
     }}
    >
     <img src={background_image} alt="" height={"300"} />
    </Box>

    <Rating name="Rating" value={rating} max={rating_top} precision={0.5} readOnly />

    <Box mt={1} maxWidth={"550px"}>
     <Typography variant="body1" mt={1}>
      {description_raw}
     </Typography>
     <Button variant="outlined" color="success" component={Link} to={website} sx={{ marginTop: 2 }}>
      Read more about the game
     </Button>
    </Box>

    <Box mt={1} p={1} sx={{
        display: "flex",
        gap: 1
    }}>
     <Box>
      <Typography variant="body1">Released: {released}</Typography>
      <Typography variant="body1">Available on: {platformName.join(", ")}</Typography>
      <Typography variant="body1">Developer: {developers_name}</Typography>
      <Typography variant="body1">Publishers: {publishers_name}</Typography>
     </Box>
     <Box>
      <Typography variant="body1">Released: {released}</Typography>
      <Typography variant="body1">Available on: {platformName.join(", ")}</Typography>
      <Typography variant="body1">Developer: {developers_name}</Typography>
      <Typography variant="body1">Publishers: {publishers_name}</Typography>
     </Box>
    </Box>

    <Box mt={1}>
     <Typography variant="caption">
      <i>updated: {updated}</i>
     </Typography>
    </Box>
   </Box>
  </>
 );
};

export default GameDetails;
