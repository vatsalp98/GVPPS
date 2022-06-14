import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingScreen from './home/screens/PricingScreen';
import GalleryScreen from './home/screens/GalleryScreen';
import LocationScreen from './home/screens/locationScreen';
import AboutScreen from './home/screens/AboutScreen';
import AwardsScreen from './home/screens/AwardsScreen';
import CoachScreen from './home/screens/CoachScreen';

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" exact element={<App/>}/>
        <Route path="/pricing" element={<PricingScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path='/location' element={<LocationScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/awards" element={<AwardsScreen />} />
        <Route path="/coaches" element={<CoachScreen />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
