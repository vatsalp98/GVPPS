import React from "react";
import "../css/mobilebottomnav.scss";
import HomeIcon from "@mui/icons-material/Home";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import InfoIcon from "@mui/icons-material/Info";
import {  LocationOn, MonetizationOn } from "@mui/icons-material";
function MobileBottomNav() {
  return (
    <>
      <nav class="mobile-bottom-nav">
        <div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
          <div class="mobile-bottom-nav__item-content">
            <HomeIcon sx={{width:"100%"}}/>
            Home
          </div>
        </div>
        <div class="mobile-bottom-nav__item">
          <div class="mobile-bottom-nav__item-content">
            <LocationOn sx={{width:"100%"}} />
            Location
          </div>
        </div>
        <div class="mobile-bottom-nav__item">
          <div class="mobile-bottom-nav__item-content">
            <MonetizationOn sx={{width:"100%"}}/>
            Pricing
          </div>
        </div>

        <div class="mobile-bottom-nav__item">
          <div class="mobile-bottom-nav__item-content">
            <WorkspacePremiumIcon sx={{width:"100%"}}/>
            Awards
          </div>
        </div>
        <div class="mobile-bottom-nav__item">
          <div class="mobile-bottom-nav__item-content">
            <InfoIcon sx={{width:"100%"}}/>
            About
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileBottomNav;
