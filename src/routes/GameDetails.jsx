// Importing React
import React from "react";
import { useParams } from "react-router-dom";

// Importing MUI
import { Box, Typography } from "@mui/material";

// Importing functions
import useApi from "../hooks/useApi";

// Importing components
import HeaderSection from "../components/GameDetails/HeaderSection";
import ImageSection from "../components/GameDetails/ImageSection";
import DescriptionSection from "../components/GameDetails/DescriptionSection";
import SimilarGamesSection from "../components/GameDetails/SimilarGamesSection";
import RatingSection from "../components/GameDetails/RatingSection";
import VideoSection from "../components/GameDetails/VideoSection";

const GameDetails = () => {
 let { id } = useParams();
 const apiKey = process.env.REACT_APP_API_KEY;

 const { data, isLoading, isError } = useApi(`/games/${id}?key=${apiKey}`, "GET");
 const { data: imageData } = useApi(`/games/${id}/screenshots?key=${apiKey}`, "GET");
 const { data: videoData } = useApi(`/games/${id}/movies?key=${apiKey}`, "GET");

 // Destructuring response data
 const { name, description_raw, ratings, tags, website, genres, esrb_rating, released, updated, platforms, developers, publishers, rating, rating_top, background_image, background_image_additional } =
  data;

 // Checking for undefined values
 if (developers === undefined) return null;
 if (platforms === undefined) return null;

 if (isLoading) return;
 if (isError) throw isError;

 // Setting var value
 const gameData = {
  developers,
  publishers,
  released,
  tags,
  genres,
  esrb_rating,
  updated,
  website,
  platforms,
 };

 const backgroundImage = {
  position: "fixed", // or 'absolute' depending on your layout
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background_image})`,
  zIndex: "-1",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  opacity: 0.3,
 };

 return (
  <>
   <div style={backgroundImage}></div>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     gap: 2,
     marginTop: 2,
     marginBottom: 1,
    }}
   >
    <HeaderSection name={name} ratings={rating} maxRatings={rating_top} />
    <ImageSection image={background_image_additional} images={imageData} />
    <RatingSection data={ratings} />
    <DescriptionSection description={description_raw} gameData={gameData} />
    <VideoSection data={videoData} />
    <SimilarGamesSection />
   </Box>
   <Typography variant="body2" sx={{ textAlign: "center" }}>
    Page last updated: {updated}
   </Typography>
  </>
 );
};

export default GameDetails;
