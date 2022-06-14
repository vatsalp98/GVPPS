import React from 'react'
import { useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';
import SectionTitle from '../components/SectionTitle';
import ActionCard from '../components/ActionCard';
import '../css/coachScreen.css';

function CoachScreen() {
    const bool = useMediaQuery('(max-width: 600px)')
    return (
    <>
        {bool === true ? <MobileBottomNav/> : <SideBar /> }
        <div className="container">
          <SectionTitle 
            title="Our Coaches"
            subtitle="BCTTA Approved"
            className="section-title"
          />
          <div className="coach-section">
            <ActionCard 
              title="Helen WU"
              subtitle="Head Coach"
              className="action-card"
            />
            <ActionCard 
              title="Yiu Tak Tse"
              subtitle="Head Coach"
              className="action-card"
            />
            <ActionCard 
              title="Darren Yip"
              subtitle="Head Coach"
              className="action-card"
            />
            <ActionCard 
              title="Jeff Guo"
              subtitle="Head Coach"
              className="action-card"
            />
          </div>
        </div>
    </>
  )
}

export default CoachScreen;