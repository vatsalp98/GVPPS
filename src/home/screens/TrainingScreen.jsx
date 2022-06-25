import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import MobileBottomNav from "../components/MobileBottomNav";
import SideBar from "../components/SideBar";
import "../css/trainingScreen.css";
import Box from "@mui/material/Box";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
function TrainingScreen() {
  const isMobileScreen = useMediaQuery("(max-width: 600px)");
  const bool = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {bool === true ? <MobileBottomNav /> : <SideBar />}
      <Grid item xs={12} sm={12} md={12} square>
        <Box
          sx={{
            my: 0,
            mx: 25,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <h3 className="training-title" style={{ fontWeight: 900 }}>
              Training Schedule
            </h3>
            <ul>
              <li
                className="summerListItem training-subtitle"
                style={{ fontWeight: 700 }}
              >
                Summer Special Classes in Green
              </li>
              <li
                className="adultClassItem training-subtitle"
                style={{ fontWeight: 700 }}
              >
                Regular Classes in Blue
              </li>
            </ul>
            <Zoom>
              <img
                className="schedule-img"
                src="/schedule.png"
                alt="Training Schedule"
              />
            </Zoom>
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

export default TrainingScreen;
