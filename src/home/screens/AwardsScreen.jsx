import React from "react";

import { Grid, useMediaQuery } from "@mui/material";
import MobileBottomNav from "../components/MobileBottomNav";
import SideBar from "../components/SideBar";
import FlipCard from "../components/FlipCard";
import TypingHeadline from "../components/TypingHeadline";

import CssBaseline from "@mui/material/CssBaseline";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import MobileHeadline from "../components/MobileHeadline";

function AwardsScreen() {
  const isMobileScreen = useMediaQuery("(max-width: 600px)");
  const bool = useMediaQuery("(max-width: 600px)");

  return (
    <>
      {bool === true ? <MobileBottomNav /> : <SideBar />}

      <Grid item xs={12} sm={12} md={12} square>
        <Box
          sx={{
            my: 0,
            mx: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              
              <img src="logo.png" alt="GVPPS Logo" />
  
              
            </Avatar> */}

          <Box component="form" noValidate sx={{ mt: 1 }}>
            {bool === true ? (
              <h5 style={{ fontWeight: 900 }}>Awards</h5>
            ) : (
              <h3 style={{ fontWeight: 900 }}>Awards</h3>
            )}

            <FlipCard
              img={"/gallery-content/IMG_7.jpg"}
              title={"Award title"}
              description={
                "Good tools make application development quicker and easier to maintain than if you did everything by hand.."
              }
            />
            <FlipCard
              img={"/gallery-content/IMG_12.jpg"}
              title={"Award title"}
              description={"Heres short description of the award"}
            />
            <FlipCard
              img={"/gallery-content/IMG_11.jpg"}
              title={"Award title"}
              description={"Heres short description of the award"}
            />
            {
              //Added this so that user can scroll properly on mobile
              isMobileScreen && <Box sx={{ height: "90px" }} />
            }
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default AwardsScreen;
