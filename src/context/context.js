import React  from 'react';

export const AppContext = React.createContext({"selected":"home",changeSelected: () => {
     
},});

export class BottomNav{
     static  home = "home";
     static  location = "location";
     static  awards = "awards";
     static  aboutus = "aboutus";
}



export default AppContext.Provider;

