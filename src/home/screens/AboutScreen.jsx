import React from 'react';
import { useMediaQuery, Button } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';
import SectionTitle from '../components/SectionTitle';
import styled from 'styled-components';

const AboutSectionStyle = styled.div`
  margin-left: 100px;
  bacground-color: #272627;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    bacground-color: #272627;
    margin: auto;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    font-size: 1.2rem;
    
    margin: 0px;
  }
  .aboutSection_left,
  .aboutSection_right {
    flex: 1;
    margin: 5px;
  }
  .section-title {
    text-align: left;
  }
  .container img {
    border-radius: 25px;
    margin: 10px;
  }

  @media only screen and (max-width: 400px) {
    .container {
      display: flex;
      align-items: center;
      // justify-content: flex-start;
      text-align: left;
      width:300px;
      margin: auto;
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
}
`;

function AboutScreen() {
    const bool = useMediaQuery('(max-width: 600px)')
  return (
    
    <>
        {bool === true ? <MobileBottomNav/> : <SideBar /> }
        <AboutSectionStyle>
          <div className="container">
            <div className="aboutSection_left">
              <SectionTitle
                className="section-title"
                subtitle='About us'
                title=''
              />
              <p>
                Founded in September 2019 as a Non-Profit Organization.
                We Strive to provide the best training in Table Tennis for any age and skill level.
                We are open to everyone and would love new players to join us in getting better with a friendly environment.
                We are able to cater to your specific needs for a casual play time between friends or a competitive showdown between competitors.
              </p>
              <div className="aboutSection_buttons">
                <Button></Button>
              </div>
            </div>
            <div className="aboutSection_right">
              <img src="https://gvpps.ca/wp-content/uploads/2022/03/3258b948bdd02c42c3004bbf7883c17f-1.jpg" alt=""/>
            </div>
          </div>
        </AboutSectionStyle>
    </>
    
  )
}

export default AboutScreen;

