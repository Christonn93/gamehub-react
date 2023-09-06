import React from "react";

import { Box } from "@mui/material";

import Logo from "../assets/GameHub_Logo.png";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  <>
   <Box
    sx={{
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
     flexWrap: "wrap",
     p: 2,
    }}
   >
    <Box id="section-one">
     <Link to={"/"}>
      <img src={Logo} height={100} alt="Logo" />
     </Link>
    </Box>
    <Box id="section-two">
     <Navbar />
    </Box>
   </Box>
  </>
 );
};

export default Header;
