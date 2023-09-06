import React from "react";

import { Grid } from "@mui/material";

import PS4Icon from "../../assets/platform_images/icons8-playstation.svg";
import PcIcon from "../../assets/platform_images/icons8-windows.svg";
import xBoxIcon from "../../assets/platform_images/icons8-xbox.svg";
import NintendoIcon from "../../assets/platform_images/8ws7K301.svg";
import IosIcon from "../../assets/platform_images/icons8-ios.svg";
import androidIcon from "../../assets/platform_images/icons8-android.svg";

const IconSection = ({ data }) => {
 const platformName = data.flatMap((n) => n.platform.name);

 //  console.log(platformName);

 const isPs4 = platformName.find((name) => (name = "ps4"));
 const isPc = platformName.find((name) => (name = "PC"));
 const isXbox = platformName.find((name) => (name = "Xbox 360"));
 const isNintendo = platformName.find((name) => (name = "ps4"));
 const isIos = platformName.find((name) => (name = "ps4"));
 const isAndroid = platformName.find((name) => (name = "ps4"));

 return (
  <>
    <Grid
     container
     sx={{
      alignItems: "center",
      justifyContent: "space-between",
     }}
    >
     <Grid item>
      {isPs4 ? <img src={PS4Icon} className="gameIcon" alt="game icon" /> : <></>}
      {isPc ? <img src={PcIcon} className="gameIcon" alt="game icon" /> : <></>}
      {isXbox ? <img src={xBoxIcon} className="gameIcon" alt="game icon" /> : <></>}
      {isNintendo ? <img src={NintendoIcon} className="gameIcon" alt="game icon" /> : <></>}
      {isIos ? <img src={IosIcon} className="gameIcon" alt="game icon" /> : <></>}
      {isAndroid ? <img src={androidIcon} className="gameIcon" alt="game icon" /> : <></>}
     </Grid>
     <Grid item></Grid>
    </Grid>
  </>
 );
};

export default IconSection;
