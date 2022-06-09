import { useMediaQuery } from '@mui/material';
import React from 'react';

import { useTypingText } from '../../hooks/useTyping';
import "../css/typingheadline.css";
function TypingHeadline(){
    const isMobileScreen = useMediaQuery('(max-width: 600px)')
    
    const { word, stop, start } = useTypingText(
        ["Passion", "Skills", "Hobby"],
        130,
        20
      );
    
      return (
       
        <div className={"typing-headline-outer-div"}>
          <h1 className={isMobileScreen===true?"mobile-typing-headline":"typing-headline"}>Nurture your table tennis {word}</h1>
        </div>
      );
}


export default TypingHeadline;