/* eslint-disable import/no-anonymous-default-export */
// SideBar.js

import React from "react";
import "../css/sideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import InfoIcon from "@mui/icons-material/Info";
import { LocationOn, MonetizationOn } from "@mui/icons-material";


function Sidebar (_props) {

  return (
    <nav class="navbar" style={{height:"100vh" }}>
      <ul class="navbar-nav mobile-nav">
        <li class="logo">
          <a href="#6" class="nav-link" >
            <span class="link-text">G.V.P.P.S.</span>
            <img
              src="/logo-no-bg.png"
              alt="GVPPS Logo"
              aria-hidden={true}
              class="nav-logo"
            />
          </a>
        </li>

        <li class="nav-item home-icon-container bloc-icon">
          <a href="#6" class="nav-link">
            <HomeIcon className="home-icon"/>
            <span class="link-text">Home</span>
          </a>
        </li>
        <li class="nav-item location-icon-container">
          <a href="#5" class="nav-link">
            <LocationOn className="location-icon"/>
            <span class="link-text">Location</span>
          </a>
        </li>
        <li class="nav-item pricing-icon-container">
          <a href="#4" class="nav-link">
            <MonetizationOn className="pricing-icon"/>
            <span class="link-text">Pricing</span>
          </a>
        </li>
        <li class="nav-item award-icon-container">
          <a href="#3" class="nav-link">
            <WorkspacePremiumIcon className="award-icon"/>
            <span class="link-text">Awards</span>
          </a>
        </li>
       
        
       
        <li class="nav-item">
          <a href="#1" class="nav-link about-icon-container">
            <InfoIcon  className="about-icon"/>
            <span class="link-text">About Us</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};


export default Sidebar;