import React from 'react';
import '../css/pricingScreen.css';


function PricingScreen() {
  return (
    <div className="pricing-page">
      <div class="background">
        <div class="container">
          <div class="panel pricing-table">
            
          <div class="pricing-plan">
              <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img"/>
              <h2 class="pricing-header">Seniors</h2>
              <ul class="pricing-features">
                <li class="pricing-features-item">$5 Drop-In Fees</li>
                
              </ul>
              <span class="pricing-price">$20</span><span class="lower">Monthly</span>
            </div>
            
            <div class="pricing-plan">
              <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img"/>
              <h2 class="pricing-header">Members</h2>
              <ul class="pricing-features">
                <li class="pricing-features-item">$5 Drop-In Fees</li>
                
              </ul>
              <span class="pricing-price">$40</span><span class="lower">Monthly</span>
            </div>
            
            <div class="pricing-plan">
              <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img"/>
              <h2 class="pricing-header">Non-Member</h2>
              <ul class="pricing-features">
                <li class="pricing-features-item">Never sleeps</li>
                <li class="pricing-features-item">Multiple workers for more powerful apps</li>
              </ul>
              <span class="pricing-price">$150</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingScreen;