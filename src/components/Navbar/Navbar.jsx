import React from "react";
import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";


const Navbar = () => {
 return (
  <>
   <Box sx={{ display: "flex", alignItems: "center", textAlign: "center", gap: 2, flexWrap: "wrap" }}>
   <Button variant="outlined" color="secondary" component={Link} to="/">Home</Button>
   <Button variant="outlined" color="secondary" component={Link} to="/list">Game list</Button>
   </Box>
  </>
 );
};

export default Navbar;
