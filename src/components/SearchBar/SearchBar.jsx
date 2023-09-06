import React from "react";

import { Box, TextField } from "@mui/material";

const SearchBar = () => {
 return (
  <Box marginBottom={2}>
   <TextField placeholder="Search" fullWidth/>
  </Box>
 );
};

export default SearchBar;
