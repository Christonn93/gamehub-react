import React from "react";

import { Box } from "@mui/material";

import Logo from "../assets/GameHub_Logo.png";
import Navbar from "../components/Navbar/Navbar";

const Header = () => {
 return (
  <>
   <Box
    sx={{
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
     p: 2,
    }}
   >
    <Box id="section-one">
     <img src={Logo} height={100} alt="Logo"/>
    </Box>
    <Box id="section-two">
     <Navbar />
    </Box>
   </Box>
  </>
 );
};

export default Header;
