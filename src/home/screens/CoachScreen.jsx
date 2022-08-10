import React from 'react'
import { useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';
import Services from '../components/CoachCard';
import '../css/coachScreen.css';


function CoachScreen() {
    const bool = useMediaQuery('(max-width: 600px)')
    return (
    <>
        {bool === true ? <MobileBottomNav/> : <SideBar /> }
        <Services />
    </>
  )
}

export default CoachScreen;