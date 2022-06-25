import React from 'react';
import LocationCard from '../components/locationCard';
import { useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';
import MenuCard from '../components/MenuCard';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';

const LocationScreenStyle = styled.div`
  .remainingHeight {
    height: 100%;
    padding-top: 300px;
    padding-bottom: 350px;
    // background-color: #B0BEC5;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-left: 80px;
    flex: 1 0 auto;
    flex-direction: column;
  }
  .location-card {
    margin: auto;
  }

  @media (max-width: 768px) {
    .remainingHeight {
      margin-left: 0px;
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
      padding-top: 250px;
      padding-bottom: 250px;
    }
  }
`;

function LocationScreen() {
    const bool = useMediaQuery('(max-width: 600px)')
  return (
    <>
        {bool === true ? <MobileBottomNav/> : <SideBar /> }
            <LocationScreenStyle>
              <div className="remainingHeight">
                <SectionTitle 
                title={"Visit us now"}
                subtitle={`2909 Bainbridge Ave #102, \n Burnaby, BC V5A 2S9`}/>
                <div className="location-card">
                  <a href="https://www.google.com/maps/dir//102%20-%202909%20Bainbridge%20Ave%20Burnaby%20BC%20V5B%202S9" target={"_blank"}>
                    <MenuCard
                      title="Google Maps"
                      color="#004D40"
                      img="./map.png"
                      dx="0px"
                      dy="-85px" 
                    />
                  </a>
                </div>
              </div>
            </LocationScreenStyle>
        {/* <div className="remainingHeight">
        </div> */}
        
    </>
  )
}

export default LocationScreen;