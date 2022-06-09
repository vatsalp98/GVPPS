import { useMediaQuery } from '@mui/material';
import './App.css';
import MobileBottomNav from './home/components/MobileBottomNav';
import SideBar from './home/components/SideBar';
import HomeScreen from './home/screens/HomeScreen';

function App() {
  const isMobileScreen = useMediaQuery('(max-width: 600px)')
  return (
    <>
      {isMobileScreen===true? <MobileBottomNav/> :<SideBar /> }
      <HomeScreen />
    </>
    
  );
}

export default App;
