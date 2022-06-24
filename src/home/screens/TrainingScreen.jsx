import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';
import FlipCard from '../components/FlipCard';
import Box from "@mui/material/Box";

function TrainingScreen() {
    const isMobileScreen = useMediaQuery("(max-width: 600px)");
    const bool = useMediaQuery('(max-width: 600px)')
    return (
    <>
        {bool === true ? <MobileBottomNav/> : <SideBar /> }
        <Grid item xs={12} sm={12} md={12}  square>
        
          <Box
            sx={{
              my: 0,
              mx: 25,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              
              <img src="logo.png" alt="GVPPS Logo" />
  
              
            </Avatar> */}
           

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <h3 style={{fontWeight:900}}>Training Schedule</h3>
              <ul>
                <li style={{fontWeight:700}}>Summer Special Classes in Green</li>
                <li style={{fontWeight:700}}>Regular Classes in Blue</li>
              </ul>
              <img  style={{width: 900, height: 700}} src="/schedule.png" alt="Training Schedule" />
              {
                //Added this so that user can scroll properly on mobile
                isMobileScreen && <Box sx={{ height: "90px" }} />
              }
            </Box>
          </Box>
        </Grid>
    </>
  )
}

export default TrainingScreen;