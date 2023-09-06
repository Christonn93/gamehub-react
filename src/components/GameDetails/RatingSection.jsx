import React from "react";

import { Box, Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const RatingSection = ({ data }) => {
 return (
  <>
   <Box mt={1} mb={1}
   sx={{
    display: "flex",
    gap: 2,
    flexWrap: "wrap"
   }}>
    {data.map((e) => {
     let color = "";

     if (e.title === "exceptional") color = "success";
     if (e.title === "recommended") color = "info";
     if (e.title === "meh") color = "warning";
     if (e.title === "skip") color = "error";

     return <Chip color="primary" icon={<CircleIcon color={color} />} label={`${e.title}` + "  " + `${e.count}`} variant="filled" />;
    })}
   </Box>
  </>
 );
};

export default RatingSection;
