import React from 'react'
import { useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';
import SectionTitle from '../components/SectionTitle';
import ActionCard from '../components/ActionCard';
import '../css/coachScreen.css';
import styled from 'styled-components';

const CoachScreenStyle = styled.div`
    body {
      background-color: #546E7A;
    }

    .container {
      text-align: center;
      background-color: #546E7A;
      display: block;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    }

    .coach-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
    
    .coach-item {
      margin-left: 10px;
      margin-top: 70px;
      margin-right: 10px;
      margin-bottom: 150px;
    }

    .flip-card {
      background-color: transparent;
      width: 300px;
      height: 500px;
      border-radius: 20%;
      perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
      background-color: #bbb;
      color: black;
    }

    /* Style the back side */
    .flip-card-back {
      background-color: #757575;
      color: white;
      transform: rotateY(180deg);
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
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <ActionCard
                        imgSrc='/helen.png'
                        title="Helen WU"
                        subtitle="Head Coach"
                        id="coach-helen"
                      />
                    </div>
                    <div class="flip-card-back">
                      <h2>Helen WU</h2>
                      <p>Head Coach</p>
                      <p>Achievements</p>
                      <ul>
                        <li>Graduate of Shanghai Physical Education College, Class of 1985</li>
                        <li>Coach of Shanghai Junior Team 1980-1985</li>
                        <li>Assistant Coach Of BC Junior Team 1989-1990</li>
                        <li>BC Junior Team Head Coach 1994-1997 and 1998-2002</li>
                        <li>Member of Chinese National Youth Team 1972</li>
                        <li>Co-Founder of GVTTA and Coach from 2002-2019</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="coach-item">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <ActionCard 
                        title="Yiu Tak Tse"
                        subtitle="Assistant Coach"
                        id="coach-yiu"
                      />
                    </div>
                    <div class="flip-card-back">
                      <h2>Yiu Tak Tse</h2>
                      <p>Assistant Coach</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="coach-item">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <ActionCard 
                        title="Darren Yip"
                        subtitle="Assistant Coach"
                        id="coach-darren"
                      />
                    </div>
                    <div class="flip-card-back">
                      <h2>Darren Yip</h2>
                      <p>Assistant Coach</p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="coach-item">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <ActionCard
                        imgSrc='/jeff.png' 
                        title="Jeff Guo"
                        subtitle="Assistant Coach"
                        id="coach-jeff"
                      />
                    </div>
                    <div class="flip-card-back">
                      <h2>Jeff Guo</h2>
                      <p>Assistant Coach</p>
                      <p>Achievements</p>
                      <ul>
                        <li>Professional Player, Member of Heilongjiang Table Tennis Provincial Team</li>
                        <li>BC Provincial Junior Team Coach</li>
                        <li>Saskatchewan Provincial Team technical Coach</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CoachScreenStyle>
    </>
  )
}

export default CoachScreen;