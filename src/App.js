import { useMediaQuery } from '@mui/material';
import './App.css';
import MobileBottomNav from './home/components/MobileBottomNav';
import SideBar from './home/components/SideBar';
import HomeScreen from './home/screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PricingScreen from './home/screens/PricingScreen';
import GalleryScreen from './home/screens/GalleryScreen';

function App() {
  const isMobileScreen = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {isMobileScreen===true? <MobileBottomNav/> :<SideBar /> }
      <Router>
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/pricing" element={<PricingScreen />} />
          <Route path="/gallery" element={<GalleryScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
