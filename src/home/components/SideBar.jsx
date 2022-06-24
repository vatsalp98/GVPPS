/* eslint-disable import/no-anonymous-default-export */
// SideBar.js

import React from "react";
import "../css/sideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import InfoIcon from "@mui/icons-material/Info";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { LocationOn, MonetizationOn  } from "@mui/icons-material";
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import { Link } from 'react-router-dom';

function Sidebar (_props) {

  return (
    
    <nav class="navbar" style={{height:"100vh" }}>
      <ul class="navbar-nav mobile-nav">
        
          <li class="logo">
            <div class="nav-link" >
                <span class="link-text">G.V.P.P.S.</span>
                <img
                  src="/logo-no-bg.png"
                  alt="GVPPS Logo"
                  aria-hidden={true}
                  class="nav-logo"
                />
            </div>
          </li>
        
        <Link to="/" >
          <li class="nav-item home-icon-container bloc-icon">
            <div class="nav-link">
              <HomeIcon className="home-icon"/>
              <span class="link-text">Home</span>
            </div>
          </li>
        </Link>
        <Link to="/coaches">
          <li class="nav-item coach-icon-container">
            <div class="nav-link">
              <SchoolRoundedIcon className="coach-icon"/>
              <span class="link-text">Coaches</span>
            </div>
          </li>
        </Link>
        <Link to="/location">
          <li class="nav-item location-icon-container">
            <div class="nav-link">
              <LocationOn className="location-icon"/>
              <span class="link-text">Location</span>
            </div>
          </li>
        </Link>
        <Link to="/training">
          <li class="nav-item pricing-icon-container">
            <div class="nav-link">
              <MonetizationOn className="pricing-icon"/>
              <span class="link-text">Training</span>
            </div>
          </li>
        </Link>
        <Link to="/gallery">
          <li class="nav-item gallery-icon-container">
            <div class="nav-link">
              <CollectionsOutlinedIcon className="gallery-icon"/>
              <span class="link-text">Gallery</span>
            </div>
          </li>
        </Link>
        <Link to="/awards">
          <li class="nav-item award-icon-container">
            <div class="nav-link">
              <WorkspacePremiumIcon className="award-icon"/>
              <span class="link-text">Awards</span>
            </div>
          </li>
        </Link>
        
        <Link to="/about">
          <li class="nav-item">
            <div class="nav-link about-icon-container">
              <InfoIcon  className="about-icon"/>
              <span class="link-text">About Us</span>
            </div>
          </li>
        </Link>
      </ul>
    </nav>
    
  );
};


export default Sidebar;