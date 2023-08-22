import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";


const Navbar = () => {
 return (
  <>
   <Box sx={{ display: "flex", alignItems: "center", textAlign: "center", gap: 2 }}>
   <Button variant="outlined" color="secondary" component={Link} to="/">Home</Button>
   <Button variant="outlined" color="secondary" component={Link} to="/list">Game list</Button>
   </Box>
  </>
 );
};

export default Navbar;
