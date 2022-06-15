import React from 'react'
import { useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';
import SectionTitle from '../components/SectionTitle';
import ActionCard from '../components/ActionCard';
import '../css/coachScreen.css';
import styled from 'styled-components';

const CoachScreenStyle = styled.div`
    .container {
      text-align: center;
      padding-left: 200px;
      padding-right: 100px;
      background-color: #546E7A;
      flex: 1 0 100%;
    }

    .coach-section {
      display: flex;
      flex-direction: row;
      margin-top: 50px;
    }
    
    .coach-item {
      margin-left: 10px;
      margin-top: 70px;
      margin-bottom: 150px;
    }

    @media (max-width: 568px) {
      .coach-section {
          display: flex;
          flex-direction: column;
      }
      .container {
          text-align: center;
          display: flex;
          flex-direction: column;
      }
    }
  `;

function CoachScreen() {
    const bool = useMediaQuery('(max-width: 600px)')
    return (
    <>
        {bool === true ? <MobileBottomNav/> : <SideBar /> }
        <CoachScreenStyle>
          <div className="container">
            <SectionTitle 
              title="Our Coaches"
              subtitle="BCTTA Approved"
              className="section-title"
            />
            <div className="coach-section">
              <div className="coach-item">
                <ActionCard 
                  title="Helen WU"
                  subtitle="Head Coach"
                  className="action-card"
                  id="coach-helen"
                />
              </div>
              <div className="coach-item">
                <ActionCard 
                  title="Yiu Tak Tse"
                  subtitle="Assistant Coach"
                  className="action-card"
                  id="coach-yiu"
                />
              </div>
              <div className="coach-item">
                <ActionCard 
                  title="Darren Yip"
                  subtitle="Assistant Coach"
                  className="action-card"
                  id="coach-darren"
                />
              </div>
              <div className="coach-item">
                <ActionCard 
                  title="Jeff Guo"
                  subtitle="Assistant Coach"
                  className="action-card"
                  id="coach-jeff"
                />
              </div>
            </div>
          </div>
        </CoachScreenStyle>
    </>
  )
}

export default CoachScreen;