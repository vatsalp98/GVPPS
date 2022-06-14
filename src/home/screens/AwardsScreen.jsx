import React from 'react';

import { useMediaQuery } from '@mui/material';
import MobileBottomNav from '../components/MobileBottomNav';
import SideBar from '../components/SideBar';

function AwardsScreen() {
    const bool = useMediaQuery('(max-width: 600px)')

  return (
    <>
        {bool === true ? <MobileBottomNav/> : <SideBar /> }
        <div>AwardsScreen</div>
    </>
  )
}

export default AwardsScreen;