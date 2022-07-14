import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SmallCards from "../components/SmallCards";
import CopyRight from "../components/copyRight";
import MenuCard from "../components/MenuCard";
import { orange, purple } from "@mui/material/colors";
import TypingHeadline from "../components/TypingHeadline";
import { useMediaQuery } from "@mui/material";
import MobileHeadline from "../components/MobileHeadline";


const theme = createTheme();

export default function HomeScreen() {
  const isMobileScreen = useMediaQuery("(max-width: 600px)");

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={3}
          md={6}
          sx={{
            borderRadius: "0 50px 50px 0",
            backgroundImage:"url(/home.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            // backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={9} md={6} component={Paper} elevation={8} square>
          <Box
            sx={{
              my: 0,
              mx: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              
              <img src="logo.png" alt="GVPPS Logo" />
  
              
            </Avatar> */}
            {isMobileScreen && (
              <MobileHeadline/>
            )}
            <TypingHeadline />

            <Box component="form" noValidate sx={{ mt: 1 }}>
              {/* <SmallCards
                number="one"
                backgroundColor={"red"}
                img="/train.png"
                title={"Coaches"}
                subtitle={"BCTTA Approved Coaches"}
                buttonText={"View coaches"}
                onClick={() => {}}
              /> */}
              <MenuCard
                img="/train.png"
                color={"#8c4e97"}
                dx={"30px"}
                dy={"-65px"}
                title={"Coaches"}
                navigateTo={"/coaches"}
              />
              <MenuCard
                img="https://gvpps.ca/wp-content/uploads/2022/03/3258b948bdd02c42c3004bbf7883c17f-1.jpg"
                color={"#90877c"}
                title={"Training"}
                dx={"35px"}
                navigateTo={"/training"}
              />
              <MenuCard
                dx={"30px"}
                dy={"-95px"}
                img="/casual.png"
                color={"#407bff"}
                title={"Drop Ins"}
                navigateTo={"/training"}
              />
              {
                //Added this so that user can scroll properly on mobile
                isMobileScreen && <Box sx={{ height: "90px" }} />
              }
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
