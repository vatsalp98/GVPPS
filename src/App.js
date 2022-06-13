
import './App.css';
import HomeScreen from './home/screens/HomeScreen';
import MobileBottomNav from './home/components/MobileBottomNav';
import SideBar from './home/components/SideBar';
import { useMediaQuery } from '@mui/material';

function App() {
  
  return (
    <>
    {useMediaQuery('(max-width: 600px)')===true? <MobileBottomNav/> :<SideBar /> }
      <HomeScreen />
    </>
  );
}

export default App;
