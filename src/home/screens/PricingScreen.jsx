import React from 'react';
import '../css/pricingScreen.css';
import { useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';


function PricingScreen() {
  const bool = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {bool === true ? <MobileBottomNav/> : <SideBar /> }
      <div className="pricing-page">
        <div class="background">
          <div class="container">
            <div class="panel pricing-table">
              
            <div class="pricing-plan">
                <img src="/seniorTT.png" alt="snior TT" class="pricing-img"/>
                <h2 class="pricing-header">Seniors</h2>
                <ul class="pricing-features">
                  <li class="pricing-features-item">$5 Drop-In Fees</li>
                  <li class="pricing-features-item">Membership Fees</li>
                </ul>
                <span class="pricing-price">$20</span><span class="lower">yearly</span>
              </div>
              
              <div class="pricing-plan">
                <img src="/train.png" alt="" class="pricing-img"/>
                <h2 class="pricing-header">Members</h2>
                <ul class="pricing-features">
                  <li class="pricing-features-item">$5 Drop-In Fees</li>
                  <li class="pricing-features-item">Membership Fees</li>
                </ul>
                <span class="pricing-price">$40</span><span class="lower">yearly</span>
              </div>
              
              <div class="pricing-plan">
                <img src="/casual.png" alt="" class="pricing-img"/>
                <h2 class="pricing-header">Others</h2>
                <ul class="pricing-features">
                  <li class="pricing-features-item">$7 Drop-in Fees</li>
                  <li class="pricing-features-item">Membership Fees</li>
                </ul>
                <span class="pricing-price">$40</span><span class="lower">yearly</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingScreen;