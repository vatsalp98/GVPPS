import React from 'react';
import LocationCard from '../components/locationCard';
import '../css/locationScreen.css';
import { useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';

function LocationScreen() {
    const bool = useMediaQuery('(max-width: 600px)')
  return (
    <>
    {bool === true ? <MobileBottomNav/> : <SideBar /> }
    <div className="location-screen">
        <LocationCard />
    </div>
    </>
  )
}

export default LocationScreen;