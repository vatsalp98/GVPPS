
import './App.css';
import HomeScreen from './home/screens/HomeScreen';
import MobileBottomNav from './home/components/MobileBottomNav';
import SideBar from './home/components/SideBar';
import { useMediaQuery } from '@mui/material';
import Provider, { BottomNav } from "./context/context";
function App() {
  
  
  return (
  
    <Provider value={{"selected":  BottomNav.home}}>
    {useMediaQuery('(max-width: 600px)')===true? <MobileBottomNav/> :<SideBar /> }
      <HomeScreen />
    </Provider>
  );
}

export default App;

